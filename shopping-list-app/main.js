var app = new Vue({
   el:'#shopping-list',
   data: {
       header: 'Shopping List App',
       newItem: '',
       items: [ 
           {
            label: '10 party hats',
            purchased: false,
            highPriority: false
            } , 
            {
              label: '2 boards games',
              purchased: 'true'   ,
              highPriority: false

            },
            {
                label: '20 cups',
                purchased: 'false',
                highPriority: true

            }
             ]
   } ,
   computed: {
      reversedItems() {
         return this.items.slice(0).reverse();
      }
   },
   methods: {
     saveItem: function(){
        this.items.push(
            {
                label: this.newItem,
                purchased: 'false'
            }
            );
        this.newItem = '';
     },
     togglePurchased: function(item){
         item.purchased = !item.purchased;
     }
   }
});