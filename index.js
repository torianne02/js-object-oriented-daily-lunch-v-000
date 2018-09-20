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

}
