function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonData= {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "City": "Tokyo, Japan",
        "Population": 37400068,
		"popupContent":"Tokyo, Japan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.75391,
          35.695126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Delhi, India",
        "Population": 28514000,
		"popupContent": "Delhi, India"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.334404,
          24.734319
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Shanghai, China",
        "Population": 25582000,
		"popupContent": "Shanghai, China"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.483385,
          31.246027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "São Paulo, Brazil",
        "Population": 21650000,
		"popupContent": "São Paulo, Brazil"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -47.504873,
          -1.32311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Mexico City, Mexico",
        "Population": 21581000,
		"popupContent": "Mexico City, Mexico"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.150344,
          19.371422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Cairo, Egypt",
        "Population": 20076000,
		"popupContent": "Cairo, Egypt"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.24967,
          30.06263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Mumbai, India",
        "Population": 19980000,
		"popupContent": "Mumbai, India"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.875449,
          19.10109
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Beijing, China",
        "Population": 19618000,
		"popupContent": "Beijing, China"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.417592,
          39.937967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Dhaka, Bangladesh",
        "Population": 19578000,
		"popupContent": "Dhaka, Bangladesh"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.40744,
          23.7104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Osaka-shi, Japan",
        "Population": 19281000,
		"popupContent": "Osaka-shi, Japan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.50506,
          34.691802
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "New York, NY, USA",
        "Population": 18819000,
		"popupContent": "New York City, USA"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9708,
          40.68295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Karachi City, Pakistan",
        "Population": 15400000,
		"popupContent": "Karachi City, Pakistan"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          67.238928,
          24.984695
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Buenos Aires, Argentina",
        "Population": 14967000,
		"popupContent": "Buenos Aires, Argentina"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.454595,
          -34.607357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Chongqing, China",
        "Population": 14838000,
		"popupContent": "Chongqing, China"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.548238,
          29.565015
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Istanbul, Turkey",
        "Population": 14751000,
		"popupContent": "Istanbul, Turkey"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.409152,
          41.239403
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Kolkata, India",
        "Population": 14681000,
		"popupContent": "Kolkata, India"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.362561,
          22.550437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Manila, Philippines",
        "Population": 13482000,
		"popupContent": "Manila, Philippines"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Lagos",
        "Population": 13463000,
		"popupContent": "Lagos, Nigeria"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.39583,
          6.45306
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Rio de Janeiro, Brazil",
        "Population": 13293000,
		"popupContent": "Rio de Janeiro, Brazil"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -43.518246,
          -22.935024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Tianjin, China",
        "Population": 13215000,
		"popupContent": "Tianjin, China"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.185182,
          39.107355
        ]
      }
    }
  ]
}

