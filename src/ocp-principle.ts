//! Open Closed Principle

//* Easy to add new classes and prevent to modified my source of true
interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
  giveDiscount(): number {
    return 10;
  }
}

class PermiumCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
  giveDiscount(): number {
    return 20;
  }
}

class GoldCustomer implements Customer {
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
  giveDiscount(): number {
    return 30;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
  giveLoyaltyPoints(customer: Customer, amountSpent: number): number {
    return customer.addLoyaltyPoints(amountSpent);
  }
}

//* client code

let premiumCustomer: PermiumCustomer = new PermiumCustomer();

let discount: Discount = new Discount();

// export const answer = discount.giveDiscount(premiumCustomer);
export const answer = discount.giveLoyaltyPoints(premiumCustomer, 30);
