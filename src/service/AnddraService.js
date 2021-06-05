import BaseService from "./base/BaseService";

export default new class AnddreaService extends BaseService {
    async registration(user_data) {
        return await this.put('api/user/create', user_data);
    }

    async login(user_data) {
        return await this.post('api/user/login', user_data);
    }

    async current(){
        return await this.post('api/user/current');
    }

    async allOrders(){
        return await this.get('api/orders/');
    }

    async getOrder(id){
        return await this.get('api/orders/' + id);
    }

    async editOrder(new_data){
        return await this.put('api/orders/' + new_data._id, new_data);
    }

    async newOrder(data){
        return await this.put('api/orders/', data);
    }
}();