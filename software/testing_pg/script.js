function myFunction() {

var products=
{
  "c1" : {  
            "demand"           : "0",
            "inventory"        : "13423",
            "min_stock"        : "8750",
            "target_inventory" : "12500",
            "max_stock"        : "24000",
            "end_inventory"    : "0",
            "production"       : "0"
        }
};

products.c1.demand = document.getElementById("demand").value; // Get demand from user 
var actual_inventory ; // avail stock after meeting todays demand
var actual_min       ; // items below Target Inventory after meeting today demand
var actual_max       ; // items above maximum stock after meeting today demand
var bring_min        ; //
actual_inventory = products.c1.inventory - products.c1.demand; 

if(actual_inventory < products.c1.target_inventory) //PRODUCTION SECTION
{
        if(actual_inventory < products.c1.min_stock)
        {
            if(actual_inventory<=0)
            {
                console.log('!!!! STOCKOUT !!!!!'+ actual_inventory);
                 products.c1.production = products.c1.target_inventory-actual_inventory;
            }
            else 
            {
            actual_min       = products.c1.target_inventory-actual_inventory;
            console.log(actual_min + " no's of Understock");// HERE COMES ALL JUNKS
            products.c1.production = products.c1.target_inventory-actual_inventory;
            }
         }
actual_min       = products.c1.target_inventory-actual_inventory;
console.log(actual_min + " no's of Understock");
products.c1.production = products.c1.target_inventory-actual_inventory;
}

else // NO PRODUCTION SECTION
{   

    console.log(actual_inventory-products.c1.target_inventory + ' no.s of above Target level')
    products.c1.production=0;
     if (actual_inventory>products.c1.max_stock){
        actual_max       = actual_inventory - products.c1.max_stock;
        console.log(actual_max +" no's of Overstock");}
}
    products.c1.end_inventory = actual_inventory+products.c1.production;
    document.getElementById("demo").innerHTML = "Todays demand is " + products.c1.demand +" and the available stock is "+ products.c1.inventory;
    document.getElementById("done").innerHTML ="produce : " + products.c1.production + " to bring to target";
    document.getElementById("end").innerHTML ="Todays closing Inventory is : " + products.c1.end_inventory;

}