import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  standalone: false,
  templateUrl: './listproduct.html',
  styleUrl: './listproduct.css',
})
export class Listproduct {
  products=[{"id":"p1","name":"Coca Cola","price":15,"image":"https://shop.annam-gourmet.com/pub/media/catalog/product/cache/ee0af4cad0f3673c5271df64bd520339/i/t/item_F137143_1862.jpg"},
            {"id":"p2","name":"Pepsi","price":12,"image":"https://minhcaumart.vn//media/com_eshop/products/resized/8934588012228%201-500x500.webp"},
            {"id":"p3","name":"7 Up","price":10,"image":"https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-lon-330ml-202312252102017018.jpg"},
            {"id":"p4","name":"Aqua","price":-5,"image":"https://sonhawater.vn/wp-content/uploads/2020/10/aquafina-355ml-new-2023.jpg"},
            {"id":"p5","name":"Lavie","price":-15,"image":"https://sonhawater.com/wp-content/uploads/2019/09/lavie-500ml.png"}

  ]
  selected_id:any
  constructor(private router:Router, private activeRouter: ActivatedRoute) 
  {
    //router để điều hướng
    //activerouter để nhận điều hướng
    activeRouter.paramMap.subscribe((param)=>{
      this.selected_id=param.get("id");
  })
}
  view_detail(pid:string)
  {
    //alert("View detail product: "+pid);
    this.router.navigate(["/san-pham1",pid]);
  }
}
