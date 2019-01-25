def show( f )
    puts "-----------"
    f.each{ |d| p d }
    puts "-----------"
end

def getc(t)
    t%2==0 ? "O" : "X" 
end

def judg?( f, c )
    f2 = f.transpose.reverse 
    x =""
    x2=""
    ( 1 .. 3 ).each { |i|
        if f[i].join("") == i.to_s+c*3 
            return true 
        end
        if f2[i-1].join("") == (4-i).to_s+c*3 
            return true 
        end
        x = x+f[i][i]
        x2 = x2+f2[i-1][i]
    }
    if x == c*3 
        return true 
    end
    if x2 == c*3 
        return true 
    end
end

f=[["+","1","2","3"],["1","-","-","-"],["2","-","-","-"],["3","-","-","-"]]
show(f)
t=9
until t == 0
    puts "turn=#{getc(t)}"
    x=gets
    y=gets
    if x.nil?
        x="0"
    end
    if y.nil?
        y="0"
    end
    f[y.to_i][x.to_i]=getc(t) 
    show(f)
    if judg?(f,getc(t)) 
        break 
    end
    t=t-1
end
puts t==0?"draw!" : "#{getc(t)} win"
