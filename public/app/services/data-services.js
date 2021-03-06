angular.module('App')
.service('DataServices', DataServices);

function DataServices($http, $window, $location) {

  this.getUser = function(userID) {
    var req = {
      url: '/api/users/' + userID,
      method: 'GET'
    }

    return $http(req)
      .then(function success(res) {
        return res;
      }, function failure(res) {
        $window.alerts.push({msg: 'getUser could not retrieve data', type: 'danger'});
        $location.path('/dashboard');
      });

  }

  this.getUserMachines = function(userID) {
    var req = {
      url: '/api/users/' + userID + '/machines/',
      method: 'GET'
    }
    console.log("getting user machines:", req)

    return $http(req)
      .then(function success(res) {
        return res;
      }, function failure(res) {
        $window.alerts.push({msg: 'getUserMachines could not retrieve data', type: 'danger'});
        $location.path('/dashboard');
      });
  }

  this.getAllMachines = function() {
    var req = {
      url: '/api/machines/',
      method: 'GET'
    }

    return $http(req)
      .then(function success(res) {
        return res;
      }, function failure(res) {
        $window.alerts.push({msg: 'getAllMachine could not retrieve data', type: 'danger'});
        $location.path('/');
      });
  }

  this.getMachine = function(machineID) {
    var req = {
      url: '/api/machines/' + machineID,
      method: 'GET'
    }

    return $http(req)
      .then(function success(res) {
        return res;
      }, function failure(res) {
        $window.alerts.push({msg: 'getMachine could not retrieve data', type: 'danger'});
        $location.path('/dashboard');
      });
  }

  this.createNewMachine = function(machineData) {
    var req = {
      url: '/api/machines/',
      method: 'POST',
      data: machineData
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'machineData could not post data', type: 'danger'});
      $location.path('/dashboard');
    });
  }

  this.updateMachine = function(machineID, machineData) {
    var req = {
      url: '/api/machines/' + machineID,
      method: 'PUT',
      data: machineData
    }
    console.log(req.data)

    return $http(req).then(function success(res) {
      console.log(res);
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'updateMachine could not put data', type: 'danger'});
    });
  }

  this.deleteMachine = function(machineID) {
    var req = {
      url: '/api/machines/' + machineID,
      method: 'DELETE'
    }

    return $http(req).then(function success(res) {
      return res;
    }, function failure(res) {
      $window.alerts.push({msg: 'deleteMachine could not delete data', type: 'danger'});
      $location.path('/sandbox/' + machineID);
    });
  }

}
