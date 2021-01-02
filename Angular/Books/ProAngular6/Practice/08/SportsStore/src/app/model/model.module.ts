import { NgModule } from "@angular/core";

import { StaticDataSource } from "./static.datasource";
import { ProductRepository } from "./product.repository";
import { OrderRepository } from "./order.repository";
import { Cart } from "./cart.model";
import { Order } from "./order.model";


@NgModule({
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository]
})

export class ModelModule { }