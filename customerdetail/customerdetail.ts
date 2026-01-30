import { Component } from '@angular/core';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrl: './customerdetail.css',
})
export class Customerdetail {
  constructor(private cs:CustomerService)
  {

  }
  search_customer_by_id(id:string,
    tdid:HTMLElement,
    tdname:HTMLElement,
    tdage:HTMLElement)
    {
      let c=this.cs.get_customer_detail(id);
      if (c!=null)
      {
        tdid.innerText=c.id;
        tdname.innerText=c.name;
        tdage.innerText="<font color='red'>"+c.age+"</font>";
      }
      else
      {
        tdid.innerText="";
        tdname.innerText="";
        tdage.innerText="";
        alert("Customer not found"+id);
      }
    }
}
