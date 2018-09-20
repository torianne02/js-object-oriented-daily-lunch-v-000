// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

const Neighborhood = (() => {
  let neighborhoodIds = 1;

  return class {
    constructor(name) {
      this.id = neighborhoodIds++;
      this.name = name;

      store.neighborhoods.push(this);
    }

    costumers() {
      return store.customers.filter(customer => customer.neighborhoodId === this.id);
    }

    meals() {
      const allMeals = this.costumers().map(customer => customer.meals());
      const merged = [].concat.apply([], allMeals);
      return [...new Set(merged)];
    }

    deliveries() {
      return store.deliveries.filter(delivery => deliver.neighborhoodId === this.id);
    }
  };
})();

const Meal = (() => {
  let mealIds = 1;

  return class {
    constructor(title, price = 0) {
      this.id = mealIds++;
      this.title = title;
      this.price = price;

      store.meals.push(this);
    }

    deliveries() {
      return store.deliveries.filter(delivery => delivery.mealId === this.id);
    }

    customers() {
      const allCustomers = this.deliveries().map(delivery => delivery.customer());
      return [...new Set(allCustomers)];
    }

    static byPrice() {
      return store.meals.sort((a, b) => a.price < b.price);
    }
  };
})();
