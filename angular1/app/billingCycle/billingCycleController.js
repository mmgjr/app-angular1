(function(){
    angular.module('primeiraApp').controller('BillingCycleCtrl',[
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs){
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.refresh = function(){
            $http.get(url).then(function(resp){
                vm.billingCycle = {}
                vm.billingCycles = resp.data
            })
        }


        vm.create = function(){
            $http.post(url, vm.billingCycle).then(function(resp){
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(function(resp){
                msgs.addError(resp.data.errors)
            })
        }

        vm.refresh()
    }
})()
