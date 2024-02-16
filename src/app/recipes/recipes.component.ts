import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
lists=[
  {id:1,name:'chicken Biriyani',chef:'Chaitu',type:'Non-Veg',price:'35.0',rating:3.5,image:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/avhqda5xijlzqovq5c7e',
  description:'This satisfying rice dish can often be an elaborate, ambitious affair, but our version simplifies the process without sacrificing any complexity of flavor.'},
  {id:2,name:'Mutton Biriyani',chef:'Sravya',type:'Non-Veg',price:'45.99',rating:4.5,image:'https://arcotbiriyani.com/35-large_default/mutton-biriyani.jpg',
  description:'Mutton biryani is a popular Indian rice dish made using long-grain basmati rice layered with a spicy mutton (goat meat) layer.'},
  {id:3,name:'Fish Pulusu',chef:'Sunitha',type:'Non-Veg',price:'30.75',rating:4.0,image:'https://img1.rapidleaks.com/2018/09/Machher-Jhol-Archanas-Kitchen.jpg',
  description:'Fish pulusu, also known as Chepala pulusu, is a delicious, spicy, and slightly tangy gravy from Andhra Pradesh, India. It’s a popular non-vegetarian dish made using fish pieces and tamarind extract.'},
  {id:4,name:'shrimp Biriyani',chef:'Deepika',type:'Non-Veg',price:'17.99',rating:4.5,image:'https://bing.com/th?id=OSK.783e406e32534b7e7ad9bda408f475da',
  description:'Prawn Biryani (Shrimp Biryani) is a delightful and aromatic one-pot meal from South India. It combines fresh prawns with fragrant basmati rice, rich Indian spices.'},
  {id:5,name:'paneer Butter Masala',chef:'Chaitraja',type:'Veg',price:'25.75',rating:4.5,image:'https://www.dwarakaorganic.com/wp-content/uploads/2021/02/Paneer-Butter-Masala-2000x1333.jpg',
  description:'Paneer Butter Masala, also known as butter paneer, is a rich and creamy curry made with paneer (Indian cottage cheese), spices, onions, tomatoes, cashews, and butter.'},
  {id:6,name:'Aloo Paratha',chef:'Madhuri',type:'Veg',price:'20.00',rating:4.0,image:'https://www.foodfusion.com/wp-content/uploads/2021/03/Spicy-paratha-Recipe-by-Food-fusion-3.jpg?v=1614592833',
  description:'Aloo Paratha are Indian Breakfast flatbreads made with whole wheat flour, boiled potatoes, spices & herbs.'},
  {id:7,name:'Mashroom Curry',chef:'pavani',type:'Veg',price:'15.00',rating:4.0,image:'https://www.thelastfoodblog.com/wp-content/uploads/2017/09/mushroom-curry-2.jpg',
  description:'Mushroom Curry is an incredible Indian curry made with mushrooms, onions, garlic, and warm spices'},
  {id:8,name:'Beans with Dry Coconut Curry',chef:'Chaitu',type:'Veg',price:'10.98',rating:4.5,image:'https://th.bing.com/th/id/R.dfa82c2801c5b288a3c5e76615eedda1?rik=DxpzzyJlwoQcig&riu=http%3a%2f%2f1.bp.blogspot.com%2f_etlYMYxmFiQ%2fTR1QWP54nYI%2fAAAAAAAAC-Y%2fwXD8Wn0HUjE%2fs1600%2fDSC_0014s.jpg&ehk=5MivoNFBnctPglVIMckIgEJahHBwyGN%2fO4dGQumUh5U%3d&risl=&pid=ImgRaw&r=0',
  description:'Beans curry is one of my signature recipes of mine which is really tastes like yummm!!'},
  {id:9,name:'Banana Cake',chef:'Hamsa',type:'Veg',price:'15.65',rating:4.0,image:'https://images.saymedia-content.com/.image/t_share/MTc2MjM2NzM3NjUwMzA0OTAz/quick_and_easy_banana_cake_.jpg',
  description:'A banana cake is a cake prepared using banana as a primary ingredient and typical cake ingredients. It can be prepared in various manners, including as a layer cake, as muffins and as cupcakes.'},
] 
getTotallists(){
   return this.lists.length;
} 
getTotalveglists(){
  return this.lists.filter(lists => lists.type === 'Veg').length;
}    
getTotalNonveglists(){
  return this.lists.filter(lists => lists.type === 'Non-Veg').length;
}
listsCountRadioButton: string = 'All';
searchText:string = '';
onfilterRadioButttonChanged(data:string){
   this.listsCountRadioButton = data; 
} 
onSearchTextEntered(searchvalue:string){
  this.searchText = searchvalue;
}
}

