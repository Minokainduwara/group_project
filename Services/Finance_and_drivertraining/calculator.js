function Calculate() {

	// amount of loan
	const amount = document.querySelector("#amount").value;

	//interest rate
	const rate = document.querySelector("#rate").value;

   //get the months
	const months = document.querySelector("#months").value;

	// Calculating interest 
	const interest = (amount * (rate * 0.01)) / months;
	
	// Calculating total payment
	const total = ((amount / months) + interest).toFixed(2);
	

	document.querySelector("#total")
			.innerHTML = "US Dollars($) : " + total;
}
