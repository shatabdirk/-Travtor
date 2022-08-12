import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter list for highest', () => {
    const list = service.filterList('highest');
    expect(list).toEqual(highestList());
  });

  it('should filter list for rentalAscending', () => {
    const list = service.filterList('rentalAscending');
    expect(list).toEqual(rentalAscending());
  });

  it('should filter list for rentalDesc', () => {
    const list = service.filterList('rentalDesc');
    expect(list).toEqual(rentalAscending().reverse());
  });

  it('should filter list for typeAsc', () => {
    const list = service.filterList('typeAsc');
    expect(list).toEqual(typeAsc());
  });

  function highestList() {
    return [{"id":"8ITI1R2FVI61116-2304.4","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":763,"perDay":42},"vehicle":{"name":"Group C - Toyata Corolla or similar","type":"Intermediate","image":"https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png","specifications":{"baggageCapacity":"5","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.5","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":746,"perDay":41},"vehicle":{"name":"Group C - Volkswagen Jetta or similar","type":"CargoVan","image":"https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.2","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Ford Focus or similar","type":"Compact","image":"http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png","specifications":{"baggageCapacity":"4","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.3","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Kia Soul or similar","type":"Compact","image":"https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.1","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":604,"perDay":36},"vehicle":{"name":"Group A - Kia Rio or similar","type":"Economy","image":"https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png","specifications":{"baggageCapacity":"1","passengerCapacity":"5"}}}];
  }

  function rentalAscending() {
    return [{"id":"8ITI1R2FVI61116-2304.1","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":604,"perDay":36},"vehicle":{"name":"Group A - Kia Rio or similar","type":"Economy","image":"https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png","specifications":{"baggageCapacity":"1","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.2","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Ford Focus or similar","type":"Compact","image":"http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png","specifications":{"baggageCapacity":"4","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.3","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Kia Soul or similar","type":"Compact","image":"https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.4","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":763,"perDay":42},"vehicle":{"name":"Group C - Toyata Corolla or similar","type":"Intermediate","image":"https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png","specifications":{"baggageCapacity":"5","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.5","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":746,"perDay":41},"vehicle":{"name":"Group C - Volkswagen Jetta or similar","type":"CargoVan","image":"https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}}]
  }

  function typeAsc() {
    return [{"id":"8ITI1R2FVI61116-2304.5","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":746,"perDay":41},"vehicle":{"name":"Group C - Volkswagen Jetta or similar","type":"CargoVan","image":"https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.2","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Ford Focus or similar","type":"Compact","image":"http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png","specifications":{"baggageCapacity":"4","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.3","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Kia Soul or similar","type":"Compact","image":"https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.1","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":604,"perDay":36},"vehicle":{"name":"Group A - Kia Rio or similar","type":"Economy","image":"https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png","specifications":{"baggageCapacity":"1","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.4","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":763,"perDay":42},"vehicle":{"name":"Group C - Toyata Corolla or similar","type":"Intermediate","image":"https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png","specifications":{"baggageCapacity":"5","passengerCapacity":"5"}}}]
  }

  function typeDesc() {
    return [{"id":"8ITI1R2FVI61116-2304.4","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":763,"perDay":42},"vehicle":{"name":"Group C - Toyata Corolla or similar","type":"Intermediate","image":"https://www.avis.com/content/dam/cars/l/2020/toyota/2020-toyota-corolla-le-sedan-grey.png","specifications":{"baggageCapacity":"5","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.1","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":604,"perDay":36},"vehicle":{"name":"Group A - Kia Rio or similar","type":"Economy","image":"https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png","specifications":{"baggageCapacity":"1","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.2","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Ford Focus or similar","type":"Compact","image":"http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png","specifications":{"baggageCapacity":"4","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.3","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":636,"perDay":37},"vehicle":{"name":"Group B - Kia Soul or similar","type":"Compact","image":"https://www.avis.com/content/dam/cars/l/2021/kia/2021-kia-soul-s-5door-hatchback-black.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}},{"id":"8ITI1R2FVI61116-2304.5","unlimitedMileage":true,"cancellationDetails":{"isCancellationFree":true,"freeCancellationEndDate":"2020-06-29T10:29:59"},"fare":{"totalAmount":746,"perDay":41},"vehicle":{"name":"Group C - Volkswagen Jetta or similar","type":"CargoVan","image":"https://www.avis.com/content/dam/cars/l/2021/volkswagen/2021-volkswagen-jetta-s-sedan-silver.png","specifications":{"baggageCapacity":"2","passengerCapacity":"5"}}}];
  }
});