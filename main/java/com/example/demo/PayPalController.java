package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.paypal.api.payments.Links;
import com.paypal.api.payments.Payment;
import com.paypal.base.rest.PayPalRESTException;

import com.example.demo.PayPalService;

@Controller //controller class to direct all requests and communicate with client 
@RequestMapping("/") 
public class PayPalController { //controller class
	
	@Autowired
	PayPalService service; //payPal service object 
	
	public static final String SUCCESS_URL = "pay/success";
	public static final String CANCEL_URL = "pay/cancel";
	
	@GetMapping("/")
	public String home() {
		return "index";
	}
	
	@RequestMapping("/Products")
	public String products() {
		return "products";
	}
	
	@RequestMapping("/allProducts")
	public String allProducts() {
		return "allProducts";
	}
	
	@RequestMapping("/details")
	public String productDetails() {
		return "product-details";
	}
	@RequestMapping("/cart")
	public String cartPage() {
		return "cart";
	}
	@PostMapping("/pay")
	public String payment(@ModelAttribute("order") Order order) {
		try {
			Payment payment = service.createPayment(order.getPrice(), order.getCurrency(), order.getMethod(), order.getIntent(), order.getDescription(), "http://localhost:8080/"+ CANCEL_URL, "http://localhost:8080/"+ SUCCESS_URL);
			
			for(Links link: payment.getLinks()) {
				if(link.getRel().equals("approval_url")) {
					return "redirect:" + link.getHref(); 
				}
			}
		} catch (PayPalRESTException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "redirect:/";
	}
	
	@GetMapping(value = SUCCESS_URL)
	public String cancelPay() {
		return "success";
	}
	
	@GetMapping(value = CANCEL_URL)
	public String successPay(@RequestParam("paymentId") String paymentId, @RequestParam("PayerID") String payerId) {
		try {
			Payment payment = service.executePayment(paymentId, payerId);
			if(payment.getState().equals("approved")) {
				return "success";
			}
		}catch(PayPalRESTException e) {
			System.out.println(e.getMessage());
		}
		return "cancel";
	}
	
	/**
	 * 
	 * 
	 */
	 
	@RequestMapping("/payPal") 
	public String checkOut() {
		return "home";
	}
	
	@RequestMapping("/product-details")
	public String detailsPage() {
		return "product-details";
	}
}
