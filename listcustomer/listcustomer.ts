import { Component } from '@angular/core';

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrl: './listcustomer.css',
})
export class Listcustomer {
  customers=[
    { "id": "1", "name": "Putin", "age":72 , "picture":"https://vcdn1-vnexpress.vnecdn.net/2025/05/05/XVSBHQJONVNQFOJMCK45OCOFC4-174-2327-2185-1746409104.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=gAKTWPxZF3gClsZFHFf9DA"},
    { "id": "2", "name": "Biden", "age":79 , "picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Joe_Biden_presidential_portrait_%28cropped%29.jpg/960px-Joe_Biden_presidential_portrait_%28cropped%29.jpg"},
    { "id": "3", "name": "Obama", "age":62 , "picture":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/President_Barack_Obama%2C_2012_portrait_crop.jpg/960px-President_Barack_Obama%2C_2012_portrait_crop.jpg"},
    { "id": "4", "name": "Trump", "age":77 , "picture":"https://cdnphoto.dantri.com.vn/jdBveK_wmIbm7mHUbZyElb254JI=/thumb_w/1020/2026/01/12/ong-trump-dang-anh-tu-nhan-minh-la-quyen-tong-thong-venezuela-1768189845588.jpg"},
  ]
}
