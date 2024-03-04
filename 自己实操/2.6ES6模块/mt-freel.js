class Vacation2 {

    constructor(destination, length) {
      this.destination = destination
      this.length = length
    }

    print() {
      console.log(`${this.destination} will take ${this.length} days.`)
    }

    }
    
    const trip = new Vacation2("Santiago, Chile", 9)

    trip.print()

class Expedition extends Vacation2 {
    constructor(destination,length,gear){
        super(destination,length);
        this.gear=gear
    }
    print(){
        super.print();
        console.log(`Bring your ${this.gear.join("and your")}`)
    }
}

export default new Expedition("厦门",3,["camera","money","sunglasses"])