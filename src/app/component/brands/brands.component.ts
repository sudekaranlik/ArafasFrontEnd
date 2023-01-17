import { Component } from '@angular/core';
import BrandModel from 'src/app/models/brands.model';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  brands:BrandModel[]=[]

  constructor(private _brandService:BrandsService){}
  ngOnInit(): void {
   this.getBrands()
  }
  async getBrands() {
    this.brands = await this._brandService.getBrands().then(res=>{return res.data.brands})
    console.log(this.brands)
  }
}
