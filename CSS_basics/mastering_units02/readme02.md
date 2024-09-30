
CASE 1:when child div value given in % ; it takes , 100% of width & ht. from parent div.
#parent{
    width: 600px;
    height:300px;
    background-color: aqua;
}
#child{
    width: 100%;
    height: 100%;
    background-color: blueviolet;
}
CASE 2:when child div value given in vh & vw ; it takes , 100% of width & ht. of the screen.(i.e 100vh&vw means 100% of ht.&wt. of the screen to be taken as value)

#parent{
    width: 600px;
    height:300px;
    background-color: aqua;
}
#child{
    width: 100vw;
    height: 100vh;
    background-color: blueviolet;
}

Cases for em and rem 
case 1 : em 
When em units are used on font-size property, the size is relative to the font-size of the parent. When used on other properties, it’s relative to the font-size of that element itself.
#test{
    font-size: 5px;
    width:100em;
    height:10em;
    background-color: bisque; 
}

case 2 : rem 
The rem is based upon the font-size value of the root element, which is the <html> element. And if the <html> element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element.

html{
    font-size: 20px;
}
#test{
    font-size: 5px;
    width:100rem;
    height:10rem;
    background-color: bisque; 
}