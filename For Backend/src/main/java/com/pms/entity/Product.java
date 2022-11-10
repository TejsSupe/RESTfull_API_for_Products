package com.pms.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int productid;
	private String productname;
	private String producttype;
	private String Category;
	private float Price;	
	private float gst;
	private float discount;
	private float deliverycharges;
//	private float FinalPrice;
//
//	public float getFinalPrice() {
//		return FinalPrice;
//	}
//	public void setFinalPrice(float finalPrice) {
//		FinalPrice = finalPrice;
//	}
		public int getProductid() {
		return productid;
	}
	public void setProductid(int productid) {
		this.productid = productid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProducttype() {
		return producttype;
	}
	public void setProducttype(String producttype) {
		this.producttype = producttype;
	}
	public String getCategory() {
		return Category;
	}
	public void setCategory(String category) {
		Category = category;
	}
	

	
	public float getPrice() {
		return Price;
	}
	public void setPrice(float price) {
		Price = price;
	}
//	public Product(int productid, String productname, String producttype, String category, float price, float gst,
//			float discount, float deliverycharges, float finalPrice) {
//		super();
//		this.productid = productid;
//		this.productname = productname;
//		this.producttype = producttype;
//		Category = category;
//		Price = price;
//		this.gst = gst;
//		this.discount = discount;
//		this.deliverycharges = deliverycharges;
//		FinalPrice = finalPrice;
//	}
	
	public float getGst() {
		return gst;
	}
	public Product(int productid, String productname, String producttype, String category, float price, float gst,
			float discount, float deliverycharges) {
		super();
		this.productid = productid;
		this.productname = productname;
		this.producttype = producttype;
		Category = category;
		Price = price;
		this.gst = gst;
		this.discount = discount;
		this.deliverycharges = deliverycharges;
	}
	public void setGst(float gst) {
		this.gst = gst;
	}
	public float getDiscount() {
		return discount;
	}
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	public float getDeliverycharges() {
		return deliverycharges;
	}
	public void setDeliverycharges(float deliverycharges) {
		this.deliverycharges = deliverycharges;
	}
	public Product() {
		
	}
	
}
