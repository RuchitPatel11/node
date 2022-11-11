class Mobike {
  BikeNumber;
  PhoneNumber;
  Name;
  Days;
  

  constructor(BikeNo, PhoneNo, Name, Days) {
    this.BikeNumber = BikeNo;
    this.PhoneNumber = PhoneNo;
    this.Name = Name;
    this.Days = Days;
 
  }

  Rent() {
    let charge = 0;
    if (this.Days <= 5) charge = this.Days * 500;
    else if (this.Days <= 10) charge = 5 * 500 + (this.Days - 5) * 400;
    else charge = 5 * 500 + 5 * 400 + (this.Days - 10) * 200;
    return charge;
  }
}

module.exports = Mobike

