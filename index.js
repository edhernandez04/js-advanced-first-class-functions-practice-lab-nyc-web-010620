// Code your solution in this file!

const logDriverNames = function(drivers){
    for ( const driver of drivers ) {
        console.log(driver.name)
    }
}

const logDriversByHometown = function(drivers, hometown){
    for (const driver of drivers){
        if (hometown === driver.hometown){
            console.log(driver.name)
        }
    }
}

const driversByRevenue = function(drivers){
    const sorted_drivers = [...drivers]
    return sorted_drivers.sort(function(b,a){
        return b.revenue - a.revenue
    })
}

const driversByName = function(drivers){
    const named_drivers = [...drivers];
    return named_drivers.sort(function(a,b){
        return a.name.localeCompare(b.name)
    })
}

const totalRevenue = function(drivers){
    return drivers.reduce(function(agg, el, i){
      return agg + el.revenue;
    }, 0);
  }
  
const averageRevenue = function(drivers){
    const sum = totalRevenue(drivers);
    return sum / drivers.length;
  }