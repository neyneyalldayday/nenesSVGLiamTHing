class Shape{
    // Defines a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // Defines a class called Triangle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Triangle extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
        }
    }
    // Defines a class called Square which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Square extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
        }
    }
    // Defines a class called circle which extends the Shape class and has a constructor initializing 'color' and 'height' and sets the 'color' and 'height' value.
    class Circle extends Shape{
        constructor(height){
            super();
            this.height=height;
        }
        render(){
            return `<circle cx="150" cy="150" r="80" fill="${this.color}"/>`
        }
    }


    module.exports = {Triangle, Square, Circle}