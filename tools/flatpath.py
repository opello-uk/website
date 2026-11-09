import re

TOK=re.compile(r'([MmLlHhVvCcZz])|(-?\d*\.?\d+(?:e-?\d+)?)')

def parse(d):
    toks=[(m.group(1), m.group(2)) for m in TOK.finditer(d)]
    seq=[]; cmd=None; buf=[]
    for letter,num in toks:
        if letter:
            if buf:
                seq.append((cmd,buf)); buf=[]
            cmd=letter
        else:
            buf.append(float(num))
    if buf: seq.append((cmd,buf))
    return seq

def xform(d, m):
    a,b,c,dd,e,f = m
    out=[]; cur=None
    for cmd,nums in parse(d):
        i=0
        while i < len(nums) or (cmd in 'Zz' and i==0):
            if cmd in 'Zz':
                out.append('Z'); i+=1; continue
            if cmd in 'Mm':
                x,y=nums[i],nums[i+1]; i+=2
                nx,ny = (x,y) if cmd=='M' else (cur[0]+x, cur[1]+y)
                X = a*nx + c*ny + e; Y = b*nx + dd*ny + f
                cur=(nx,ny)
                out.append(f"M {X:.4f} {Y:.4f}")
                cmd='L' if cmd=='M' else 'l'
                cmdd = 'M'
            elif cmd in 'Ll':
                x,y=nums[i],nums[i+1]; i+=2
                nx,ny = (x,y) if cmd=='L' else (cur[0]+x, cur[1]+y)
                X = a*nx + c*ny + e; Y = b*nx + dd*ny + f
                cur=(nx,ny); out.append(f"L {X:.4f} {Y:.4f}")
            elif cmd in 'Cc':
                x1,y1,x2,y2,x3,y3=nums[i:i+6]; i+=6
                if cmd=='c':
                    p1=(cur[0]+x1,cur[1]+y1); p2=(cur[0]+x2,cur[1]+y2); p3=(cur[0]+x3,cur[1]+y3)
                else:
                    p1=(x1,y1); p2=(x2,y2); p3=(x3,y3)
                T=lambda p:(a*p[0]+c*p[1]+e, b*p[0]+dd*p[1]+f)
                q1,q2,q3=T(p1),T(p2),T(p3)
                cur=p3
                out.append(f"C {q1[0]:.4f} {q1[1]:.4f} {q2[0]:.4f} {q2[1]:.4f} {q3[0]:.4f} {q3[1]:.4f}")
            else:
                raise ValueError(cmd)
            if i >= len(nums): break
    return ' '.join(out)
