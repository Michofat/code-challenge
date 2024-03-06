const reverseArray = (arr) => {
  return arr.reverse();
};

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]

const reverseArray = (arr) => {
  // Get the length of the array
  const length = arr.length;

  // Iterate over the first half of the array
  for (let i = 0; i < Math.floor(length / 2); i++) {
    // Swap elements at index i and length - i - 1
    const temp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = temp;
  }

  return arr;
};

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // Output: [5, 4, 3, 2, 1]







//GET searchbyamount/categoryid/amount

#checkout
productid
buyersessionid

#purchases
itemsbought [{productid, title, amount, quantity, size},]  --- purchaserecords
totalamount
fullname
email,
address,
phonenumber,
transactionid,
cardnumber,
expirydate,
securitycode,
trackingcode

#purchaserecords
id
sessionid
title
amount
quantity
size
cancelcode (1,2,3)
cancelimage
canceldescription


feedbackupload
like t/f
suggestion text
sellerid uuid
email 

#requesteditems
title
description
minprice
maxprice
state
city
address
email
//POST
//GET

#requestimage
id
uri 

#feedback
category
description

profile
/editaddress
newaddress
/editabout 

