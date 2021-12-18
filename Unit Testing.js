function greet(name){
    let value = "Hello, ";
    if (name == null){
        return("Hello there!");
    } else if (name == name.toUpperCase()){
        return("HELLO " + name + "!");
    } else if (Array.isArray(name)){
        for (let i = 0; i < name.length; i++){
            if (i == name.length - 1){
                value += name[i];
            } else {
            value += name[i] + ", ";
        }
        }
    }  else {
        return("Hello, " + name);
    }
}