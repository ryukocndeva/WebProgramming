import { NgModule } from "@angular/core";

import { StaticDataSource } from "./static.datasource";
import { ProductRepository } from "./product.repository";
import { OrderRepository } from "./order.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";


@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository,
        {provide: StaticDataSource, useClass: RestDataSource }]
})

export class ModelModule { }