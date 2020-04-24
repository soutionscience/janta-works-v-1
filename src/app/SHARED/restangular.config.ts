const localApi = 'http://localhost:3000'

export function restangularConfigFactory(RestangularProvider){
    RestangularProvider.setBaseUrl(localApi)
}