String.prototype.commafy = function () {
  return this.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
};

Number.prototype.commafy = function () {
  return String(this).commafy();
};

var chart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginRight: 10,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'texas-drought',
      type: 'area'
    },
    colors: [
      '#f3d56a',
      '#efc635',
      '#e28d2b',
      '#d9482b',
      '#a33622'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false,
        align: 'left',
        verticalAlign: 'top',
        layout: 'horizontal',
        floating: false,
        borderWidth: 0,
        margin: 0,
        symbolPadding: 3,
        symbolWidth: 10,
        itemStyle: {
          color: '#555'
        },
        itemHoverStyle: {
          color: '#555'
        }
    },
    plotOptions: {
      area: {
        lineWidth: 0,
        marker: {
          enabled: false
        },
        stacking: 'normal',
        fillOpacity: 1
      }
    },
    title: {
      text: null
    },
    tooltip: {
        shared: true,
        borderWidth: 0,
        borderRadius: 0,
        crosshairs: [{
          width: 1,
          color: '#444',
          zIndex: 10
        },false],
        valueDecimals: 1,
        formatter: function() {
            var s = '<strong>'+ this.x +'</strong>';

            $.each(this.points, function(i, point) {
                s += '<br/><span style="font-weight: bold; color:' + point.series.color + ';">' + point.series.name +':</span> '+
                Math.round(point.y) +'%';
            });

            return s;
        }
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      startOnTick: true,
      endOnTick: true,
      tickInterval: 1,
      tickLength: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      labels: {
        y: 15,
        align: 'left',
        formatter: function() {
          var d;
          switch(this.value)
          {
            case "January 4, 2000":
              d = "2000";
              break;
            case "January 2, 2001":
              d = "2001";
              break;
            case "January 1, 2002":
              d = "2002";
              break;
            case "January 7, 2003":
              d = "2003";
              break;
            case "January 6, 2004":
              d = "2004";
              break;
            case "January 4, 2005":
              d = "2005";
              break;
            case "January 3, 2006":
              d = "2006";
              break;
            case "January 2, 2007":
              d = "2007";
              break;
            case "January 1, 2008":
              d = "2008";
              break;
            case "January 6, 2009":
              d = "2009";
              break;
            case "January 5, 2010":
              d = "2010";
              break;
            case "January 4, 2011":
              d = "2011";
              break;
            case "January 3, 2012":
              d = "2012";
              break;
            default:
              d = "";
          }
          return d;
        }
      },
      categories: ["January 4, 2000","January 11, 2000","January 18, 2000","January 25, 2000","February 1, 2000","February 8, 2000","February 15, 2000","February 22, 2000","February 29, 2000","March 7, 2000","March 14, 2000","March 21, 2000","March 28, 2000","April 4, 2000","April 11, 2000","April 18, 2000","April 25, 2000","May 2, 2000","May 9, 2000","May 16, 2000","May 23, 2000","May 30, 2000","June 6, 2000","June 13, 2000","June 20, 2000","June 27, 2000","July 4, 2000","July 11, 2000","July 18, 2000","July 25, 2000","August 1, 2000","August 8, 2000","August 15, 2000","August 22, 2000","August 29, 2000","September 5, 2000","September 12, 2000","September 19, 2000","September 26, 2000","October 3, 2000","October 10, 2000","October 17, 2000","October 24, 2000","October 31, 2000","November 7, 2000","November 14, 2000","November 21, 2000","November 28, 2000","December 5, 2000","December 12, 2000","December 19, 2000","December 26, 2000","January 2, 2001","January 9, 2001","January 16, 2001","January 23, 2001","January 30, 2001","February 6, 2001","February 13, 2001","February 20, 2001","February 27, 2001","March 6, 2001","March 13, 2001","March 20, 2001","March 27, 2001","April 3, 2001","April 10, 2001","April 17, 2001","April 24, 2001","May 1, 2001","May 8, 2001","May 15, 2001","May 22, 2001","May 29, 2001","June 5, 2001","June 12, 2001","June 19, 2001","June 26, 2001","July 3, 2001","July 10, 2001","July 17, 2001","July 24, 2001","July 31, 2001","August 7, 2001","August 14, 2001","August 21, 2001","August 28, 2001","September 4, 2001","September 11, 2001","September 18, 2001","September 25, 2001","October 2, 2001","October 9, 2001","October 16, 2001","October 23, 2001","October 30, 2001","November 6, 2001","November 13, 2001","November 20, 2001","November 27, 2001","December 4, 2001","December 11, 2001","December 18, 2001","December 25, 2001","January 1, 2002","January 8, 2002","January 15, 2002","January 22, 2002","January 29, 2002","February 5, 2002","February 12, 2002","February 19, 2002","February 26, 2002","March 5, 2002","March 12, 2002","March 19, 2002","March 26, 2002","April 2, 2002","April 9, 2002","April 16, 2002","April 23, 2002","April 30, 2002","May 7, 2002","May 14, 2002","May 21, 2002","May 28, 2002","June 4, 2002","June 11, 2002","June 18, 2002","June 25, 2002","July 2, 2002","July 9, 2002","July 16, 2002","July 23, 2002","July 30, 2002","August 6, 2002","August 13, 2002","August 20, 2002","August 27, 2002","September 3, 2002","September 10, 2002","September 17, 2002","September 24, 2002","October 1, 2002","October 8, 2002","October 15, 2002","October 22, 2002","October 29, 2002","November 5, 2002","November 12, 2002","November 19, 2002","November 26, 2002","December 3, 2002","December 10, 2002","December 17, 2002","December 24, 2002","December 31, 2002","January 7, 2003","January 14, 2003","January 21, 2003","January 28, 2003","February 4, 2003","February 11, 2003","February 18, 2003","February 25, 2003","March 4, 2003","March 11, 2003","March 18, 2003","March 25, 2003","April 1, 2003","April 8, 2003","April 15, 2003","April 22, 2003","April 29, 2003","May 6, 2003","May 13, 2003","May 20, 2003","May 27, 2003","June 3, 2003","June 10, 2003","June 17, 2003","June 24, 2003","July 1, 2003","July 8, 2003","July 15, 2003","July 22, 2003","July 29, 2003","August 5, 2003","August 12, 2003","August 19, 2003","August 26, 2003","September 2, 2003","September 9, 2003","September 16, 2003","September 23, 2003","September 30, 2003","October 7, 2003","October 14, 2003","October 21, 2003","October 28, 2003","November 4, 2003","November 11, 2003","November 18, 2003","November 25, 2003","December 2, 2003","December 9, 2003","December 16, 2003","December 23, 2003","December 30, 2003","January 6, 2004","January 13, 2004","January 20, 2004","January 27, 2004","February 3, 2004","February 10, 2004","February 17, 2004","February 24, 2004","March 2, 2004","March 9, 2004","March 16, 2004","March 23, 2004","March 30, 2004","April 6, 2004","April 13, 2004","April 20, 2004","April 27, 2004","May 4, 2004","May 11, 2004","May 18, 2004","May 25, 2004","June 1, 2004","June 8, 2004","June 15, 2004","June 22, 2004","June 29, 2004","July 6, 2004","July 13, 2004","July 20, 2004","July 27, 2004","August 3, 2004","August 10, 2004","August 17, 2004","August 24, 2004","August 31, 2004","September 7, 2004","September 14, 2004","September 21, 2004","September 28, 2004","October 5, 2004","October 12, 2004","October 19, 2004","October 26, 2004","November 2, 2004","November 9, 2004","November 16, 2004","November 23, 2004","November 30, 2004","December 7, 2004","December 14, 2004","December 21, 2004","December 28, 2004","January 4, 2005","January 11, 2005","January 18, 2005","January 25, 2005","February 1, 2005","February 8, 2005","February 15, 2005","February 22, 2005","March 1, 2005","March 8, 2005","March 15, 2005","March 22, 2005","March 29, 2005","April 5, 2005","April 12, 2005","April 19, 2005","April 26, 2005","May 3, 2005","May 10, 2005","May 17, 2005","May 24, 2005","May 31, 2005","June 7, 2005","June 14, 2005","June 21, 2005","June 28, 2005","July 5, 2005","July 12, 2005","July 19, 2005","July 26, 2005","August 2, 2005","August 9, 2005","August 16, 2005","August 23, 2005","August 30, 2005","September 6, 2005","September 13, 2005","September 20, 2005","September 27, 2005","October 4, 2005","October 11, 2005","October 18, 2005","October 25, 2005","November 1, 2005","November 8, 2005","November 15, 2005","November 22, 2005","November 29, 2005","December 6, 2005","December 13, 2005","December 20, 2005","December 27, 2005","January 3, 2006","January 10, 2006","January 17, 2006","January 24, 2006","January 31, 2006","February 7, 2006","February 14, 2006","February 21, 2006","February 28, 2006","March 7, 2006","March 14, 2006","March 21, 2006","March 28, 2006","April 4, 2006","April 11, 2006","April 18, 2006","April 25, 2006","May 2, 2006","May 9, 2006","May 16, 2006","May 23, 2006","May 30, 2006","June 6, 2006","June 13, 2006","June 20, 2006","June 27, 2006","July 4, 2006","July 11, 2006","July 18, 2006","July 25, 2006","August 1, 2006","August 8, 2006","August 15, 2006","August 22, 2006","August 29, 2006","September 5, 2006","September 12, 2006","September 19, 2006","September 26, 2006","October 3, 2006","October 10, 2006","October 17, 2006","October 24, 2006","October 31, 2006","November 7, 2006","November 14, 2006","November 21, 2006","November 28, 2006","December 5, 2006","December 12, 2006","December 19, 2006","December 26, 2006","January 2, 2007","January 9, 2007","January 16, 2007","January 23, 2007","January 30, 2007","February 6, 2007","February 13, 2007","February 20, 2007","February 27, 2007","March 6, 2007","March 13, 2007","March 20, 2007","March 27, 2007","April 3, 2007","April 10, 2007","April 17, 2007","April 24, 2007","May 1, 2007","May 8, 2007","May 15, 2007","May 22, 2007","May 29, 2007","June 5, 2007","June 12, 2007","June 19, 2007","June 26, 2007","July 3, 2007","July 10, 2007","July 17, 2007","July 24, 2007","July 31, 2007","August 7, 2007","August 14, 2007","August 21, 2007","August 28, 2007","September 4, 2007","September 11, 2007","September 18, 2007","September 25, 2007","October 2, 2007","October 9, 2007","October 16, 2007","October 23, 2007","October 30, 2007","November 6, 2007","November 13, 2007","November 20, 2007","November 27, 2007","December 4, 2007","December 11, 2007","December 18, 2007","December 25, 2007","January 1, 2008","January 8, 2008","January 15, 2008","January 22, 2008","January 29, 2008","February 5, 2008","February 12, 2008","February 19, 2008","February 26, 2008","March 4, 2008","March 11, 2008","March 18, 2008","March 25, 2008","April 1, 2008","April 8, 2008","April 15, 2008","April 22, 2008","April 29, 2008","May 6, 2008","May 13, 2008","May 20, 2008","May 27, 2008","June 3, 2008","June 10, 2008","June 17, 2008","June 24, 2008","July 1, 2008","July 8, 2008","July 15, 2008","July 22, 2008","July 29, 2008","August 5, 2008","August 12, 2008","August 19, 2008","August 26, 2008","September 2, 2008","September 9, 2008","September 16, 2008","September 23, 2008","September 30, 2008","October 7, 2008","October 14, 2008","October 21, 2008","October 28, 2008","November 4, 2008","November 11, 2008","November 18, 2008","November 25, 2008","December 2, 2008","December 9, 2008","December 16, 2008","December 23, 2008","December 30, 2008","January 6, 2009","January 13, 2009","January 20, 2009","January 27, 2009","February 3, 2009","February 10, 2009","February 17, 2009","February 24, 2009","March 3, 2009","March 10, 2009","March 17, 2009","March 24, 2009","March 31, 2009","April 7, 2009","April 14, 2009","April 21, 2009","April 28, 2009","May 5, 2009","May 12, 2009","May 19, 2009","May 26, 2009","June 2, 2009","June 9, 2009","June 16, 2009","June 23, 2009","June 30, 2009","July 7, 2009","July 14, 2009","July 21, 2009","July 28, 2009","August 4, 2009","August 11, 2009","August 18, 2009","August 25, 2009","September 1, 2009","September 8, 2009","September 15, 2009","September 22, 2009","September 29, 2009","October 6, 2009","October 13, 2009","October 20, 2009","October 27, 2009","November 3, 2009","November 10, 2009","November 17, 2009","November 24, 2009","December 1, 2009","December 8, 2009","December 15, 2009","December 22, 2009","December 29, 2009","January 5, 2010","January 12, 2010","January 19, 2010","January 26, 2010","February 2, 2010","February 9, 2010","February 16, 2010","February 23, 2010","March 2, 2010","March 9, 2010","March 16, 2010","March 23, 2010","March 30, 2010","April 6, 2010","April 13, 2010","April 20, 2010","April 27, 2010","May 4, 2010","May 11, 2010","May 18, 2010","May 25, 2010","June 1, 2010","June 8, 2010","June 15, 2010","June 22, 2010","June 29, 2010","July 6, 2010","July 13, 2010","July 20, 2010","July 27, 2010","August 3, 2010","August 10, 2010","August 17, 2010","August 24, 2010","August 31, 2010","September 7, 2010","September 14, 2010","September 21, 2010","September 28, 2010","October 5, 2010","October 12, 2010","October 19, 2010","October 26, 2010","November 2, 2010","November 9, 2010","November 16, 2010","November 23, 2010","November 30, 2010","December 7, 2010","December 14, 2010","December 21, 2010","December 28, 2010","January 4, 2011","January 11, 2011","January 18, 2011","January 25, 2011","February 1, 2011","February 8, 2011","February 15, 2011","February 22, 2011","March 1, 2011","March 8, 2011","March 15, 2011","March 22, 2011","March 29, 2011","April 5, 2011","April 12, 2011","April 19, 2011","April 26, 2011","May 3, 2011","May 10, 2011","May 17, 2011","May 24, 2011","May 31, 2011","June 7, 2011","June 14, 2011","June 21, 2011","June 28, 2011","July 5, 2011","July 12, 2011","July 19, 2011","July 26, 2011","August 2, 2011","August 9, 2011","August 16, 2011","August 23, 2011","August 30, 2011","September 6, 2011","September 13, 2011","September 20, 2011","September 27, 2011","October 4, 2011","October 11, 2011","October 18, 2011","October 25, 2011","November 1, 2011","November 8, 2011","November 15, 2011","November 22, 2011","November 29, 2011","December 6, 2011","December 13, 2011","December 20, 2011","December 27, 2011","January 3, 2012","January 10, 2012","January 17, 2012","January 24, 2012","January 31, 2012","February 7, 2012","February 14, 2012","February 21, 2012","February 28, 2012","March 6, 2012","March 13, 2012","March 20, 2012","March 27, 2012","April 3, 2012","April 10, 2012","April 17, 2012","April 24, 2012","May 1, 2012","May 8, 2012","May 15, 2012","May 22, 2012","May 29, 2012","June 5, 2012","June 12, 2012","June 19, 2012","June 26, 2012","July 3, 2012","July 10, 2012","July 17, 2012", "July 24, 2012", "July 30, 2012", "August 7, 2012", "August 14, 2012", "August 21, 2012"]
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      labels: {
          enabled: true,
          formatter: function() {
              return this.value +'%';
          },
          align: 'right'
      },
      max: 100,
      tickWidth: 0,
      tickInterval: 20,
      minorTickInterval: 10,
      title: {
         text: null
      }
    },
    series: [{
      name: 'Abnormally Dry',
      data: [23.1,30.8,35,36.57,30.11,28.85,26.07,21.67,18.37,18.3,14.96,15.25,15.76,19.15,15.65,17.01,16.38,15.8,16.37,15.98,15.38,11.53,13.43,17.27,16.63,18.93,27.22,26.57,25.49,23.94,21.38,22.28,20.18,17.55,20.13,18.87,14.86,15.53,16.34,16.32,15.47,15.79,20.92,20.96,21.26,15.08,15.14,16.21,14.37,13.53,11.78,11.23,12.82,14.69,13.22,25.62,22.75,22.26,12.58,10.7,11,10.07,10.85,10.57,13.79,14.69,11.95,11.45,10.93,10.02,15.85,13.95,11.99,12.32,10.63,10.37,15.37,16.13,17.79,14.52,19.46,21.45,18.25,17.06,15.07,12.59,14.31,18.2,17.42,15.76,12.87,13.36,15.29,14.72,17.2,16.5,17.38,18.52,18.31,15.46,14.44,14.43,13.64,14.22,14.1,16.53,18.94,19.64,20.82,21.36,20.77,21.13,23.13,22.62,22.1,23.38,22.83,21.37,19.13,17.99,18.81,18,18.99,14.84,15.37,15.99,22.79,21.31,18.07,18.38,18.84,19.7,19.45,22.07,23.71,24.05,23.41,19.88,17.85,19.2,13.74,14.98,12.86,18.68,17.59,14.96,13.57,11.86,10.63,13.65,14.3,14.39,14.2,14.8,12.79,12.22,11.66,12.8,11.73,13.35,14.18,14.95,15.35,14.84,16.04,15.33,17.09,16.29,15.48,18.03,17.41,18.47,17.45,21.06,18.39,14.88,13.16,13.13,15.91,17.09,20.01,20.4,20.32,18.05,21.98,14.83,7.14,8.12,8.88,13.21,10.61,10.32,9.11,10.62,11.03,11.42,9.43,11.72,13.23,12.92,12.61,12.88,11.96,11.25,10.74,11.15,9.42,9.69,10.84,13.25,13.25,12,12.47,13.04,14.85,14.69,14.02,14.74,12.54,12.9,15.52,17.1,18.81,19.6,20.04,17.69,15.71,16.59,17.05,17.8,16.14,13.94,11.94,10.85,13.89,14.48,15.39,16.53,18.23,19.05,16.95,12.72,11.76,11.12,12.38,14.8,15.73,13.76,16.37,13.69,12.43,13.3,12.72,12.61,13.14,12.68,11.54,11,10.42,11.55,9.76,9.49,12.99,12.33,12.13,8.9,9.04,10.01,10.46,9.77,11.15,11.31,10.95,9.63,9.59,7.84,11.35,11.32,18.89,20.91,15.86,18.66,17.88,14.99,13.54,14.8,20.01,17.48,15.84,16.58,19.04,19.31,20.31,20.24,18.92,19.29,20.98,22.05,20.96,20.61,19.18,20.28,20.19,22.04,26.65,25.12,25.55,24.45,23.33,20.92,21.58,21.07,19.74,19.68,21.03,20.35,18.67,16.86,16.46,15.94,15.77,17.6,18.06,16.82,23.6,22.34,23.72,20.46,21.03,20.38,22.25,26.53,22.64,18.76,20.24,18.03,19.07,19.91,17.91,15.55,19.25,12.64,12.32,12.96,13.69,14.18,13.93,16.28,16.56,14.77,16.77,18.46,17.63,16.49,16.92,15.64,15.15,13.8,14.69,14.57,13.91,17.7,18.58,27.53,27.19,25.03,23.36,21.56,18.5,19.32,21.95,21.46,22.38,21.26,21.82,26.16,26.69,25.25,22.3,21.75,19.78,19.88,19.23,19.14,19.96,19.36,20.56,21.3,19.88,21.05,21.79,21.83,20.73,18.98,20.37,19.72,20.8,18.98,18.03,18.23,18.1,16.63,15.36,15.33,15.99,15.84,15.22,16.3,15.55,17.83,21.14,22.62,18.74,21.54,19.78,18.8,18.92,21.52,22.63,23.46,22.9,25.83,25.72,29.08,26.7,24.19,23.31,23.32,21.24,22.22,23.16,21.85,21.15,21.02,22.79,23.7,23.56,21.71,19.07,19.05,23.84,14.92,15.92,16.6,17.36,17.67,20.9,19.26,20.93,20.52,21.76,25.12,23.57,21.34,22.42,22.13,23.05,22.86,21.74,22.03,20.07,21.81,21.06,22.08,22.75,25.17,25.16,25.6,24.98,22.7,23.12,22.49,22.58,24.11,22.5,26.2,25.26,23.04,24.39,23.95,24.79,25.61,21.6,20.21,20.59,21.64,23.75,19.47,16.69,15.74,15.05,17.75,18.35,18.72,16.76,18.8,19.79,20.32,22.03,20.16,19.8,22.82,21.23,18.16,17.23,18.26,17.06,16.63,18.98,17.58,16.45,15.73,13.49,11.44,11.85,11.09,12.58,12.59,12.81,15.12,15.07,17.6,16.9,20.78,20.65,22.05,21.9,22.52,22.72,22.19,21.97,22.98,21.61,20.87,21.59,22.85,25.37,24.29,25.11,23.56,22.63,19.37,18.34,20.74,16.77,17.99,20.82,21.01,20.4,20.64,21.89,18.92,17.53,18.1,19.9,18.94,21.5,19.67,20.7,23.32,26.95,25.15,25.9,25.54,21.95,23.48,23.99,25.19,23.88,24.86,23.84,21.94,18.29,17.87,18.34,17.1,18.36,18.36,21.45,20.56,20.82,15.8,15.29,13.81,13.94,12.94,11.4,10.28,10.41,10.71,9.39,8.87,8.88,7.68,7.88,7.58,8.86,9.2,8.77,11.3,10.2,9.25,10.19,12.36,12.91,12.43,13.87,14.19,13.23,11.81,12.07,10.39,12.13,12.51,9.86,9.11,9.07,8.8,9.25,10.08,9.94,9.81,10.51,12.41,12.73,17.23,14.8,17.69,20.42,18.44,17.02,16.07,16.37,16.2,15.79,15.2,15.46,14.86,17.16,19.54,18.85,18.83,18.7,17.69,16.93,17.69,22.59,22.29,21.27,19.14,21.46,24.3,23.86,20.78,19.21, 18.37, 18.57, 17.92, 18.11, 16.58],
      zIndex: 1
      
    },{
      name: 'Moderate Drought',
      data: [11.71,12.66,13.07,12.94,15.76,15.44,17.63,16.6,15.53,14.38,12.17,11.95,11.85,9.42,10.76,10.15,9.51,10.54,10.03,10.79,8.15,8.84,7.26,7.81,7.26,9.42,8.07,10.23,11.44,11.37,11.55,11.53,12.16,12.76,13.78,12.85,12,11.47,12.02,12.42,14.01,15.7,18.42,14.84,6.27,5.84,5.86,6.03,6.45,6.49,6.54,5.77,6.51,6.5,6.94,6.09,5.73,5.57,13.94,13.5,13.45,13.26,9.79,9.71,9.42,8.78,9.3,9.37,9.92,12.16,12.86,13.87,15.55,13.9,11.64,10.65,8.39,8.16,7.67,7.58,7.14,8.94,11.09,10.56,10.33,9.87,8.79,8.08,8.49,8.12,7.24,7.8,8.57,7.96,9.81,12.39,12.51,13.39,12.21,11.77,12.54,12.73,11.64,11.51,11.65,12.07,12.87,12.71,13.1,13.02,14.4,15.57,15.13,15.36,18.69,17.29,15.14,14.01,14.06,13.19,11.16,9.95,10.27,12.89,11.64,12.19,12.15,12.41,12.68,11.98,11.27,12.24,12.11,13,13.2,11.95,12.66,11.65,11.72,11.55,13.86,13.72,14.22,12.7,14.9,15.51,15.09,14.31,15.04,13.61,13.03,12.74,12.9,10.89,9.87,9.58,9.13,9.51,9.91,9.68,9.64,10.37,10.49,10.38,9.22,10.28,10.42,14.09,14.36,12.83,13.18,13.55,13.11,12.92,16.23,17.34,14.41,14.59,14.56,12.9,11.27,10.83,7.54,6.11,6.82,10.3,15.24,15.05,13.72,12.91,14.72,15.09,13.91,13.25,13.78,12.78,12.34,10.38,10.11,11.46,11.75,12.35,12.33,12.05,11.86,11.88,11.41,11.45,10.11,11.22,10.58,10.5,9.68,9.23,8.74,8.8,8.53,9.12,9.15,8.89,9.34,8.54,8.94,9.35,10.28,10.8,10.85,10.14,9.93,11.73,11.37,10.63,10.14,9.85,8.53,8.6,7.75,8.54,8.26,8.29,9.15,11.03,10.84,10.74,8.46,7.33,7.21,7.26,8.98,8.7,8.48,8.8,7.9,8.74,9.05,8.98,8.58,8.79,9.01,8.81,8.85,8.56,8.96,9.07,9.3,11.87,11.55,10.9,9.83,8.73,8.33,7.73,7.73,7.86,7.37,6.69,6.83,7.39,7.19,7.74,9.12,9.78,11.09,15.19,13.82,12.84,12.93,12.95,13.33,13.78,14.02,14.19,13.77,13.02,12.03,11.21,10.59,12.22,14.19,13.81,15.21,11.17,11.23,12.46,13.77,16.21,14.58,13.13,12.2,13.38,13.26,12.87,12.76,11.55,11.81,14.17,12.07,13.34,12.25,11.62,11.12,11.43,11.3,10.94,11.2,12.25,13.5,12.58,11.77,11.55,12.15,11.42,10.09,11.07,12.12,11,12.95,11.83,13.3,15.27,19.31,18.85,17.4,16.5,15.41,16.12,15.72,16.17,15.06,15.08,16.96,13.9,15.02,15.29,13.97,12.51,12.07,11.2,11.41,10.52,10.17,10.02,10.14,10.7,10.44,10.87,10.35,9.95,9.71,9.92,9.27,9.61,10.5,9.93,9.57,11.14,11.39,15.85,16.85,17.21,15.15,14.9,14.73,14.24,14.06,13.79,13.58,14.13,12.82,12.65,12.83,13.47,16.66,18.95,15.81,14.59,14.22,12.86,12.98,10.61,11.06,10.38,9.88,11.72,11.87,11.57,11.51,10.49,10.24,10.55,11.38,12.18,12.29,13.09,12.24,11.54,11.49,12.17,14.33,13.78,13.86,12.84,13.24,12.42,12.03,11.8,11.02,10.72,13.39,13.1,15.57,15.57,14.34,14.85,14.03,14.1,13.32,13.83,11.23,12.15,11.97,15.18,14.66,13.41,13.13,13.69,13.88,13.04,12.8,12.11,11.44,11.75,13.22,12.44,12.06,12.4,12.33,11.88,10.19,10.9,10.26,10.96,10.53,10.74,11.06,11.49,11.05,11.45,11.44,10.91,11.13,10.88,10.4,10.61,10.29,10.35,9.89,12.58,14.23,15.13,13.96,15.5,14.02,10.9,9.6,8.72,8.57,8.27,8.07,8.31,7.74,7.23,7.3,6.89,6.8,7.19,7.16,7.84,6.99,6.18,5.47,5.33,5.37,6.81,6.91,7.72,7.63,7.61,7.39,7.47,6.14,6.29,6.15,6.86,7.12,6.6,6.61,6.64,6.45,6.85,6.95,6.87,7.57,6.43,6.68,6.35,5.98,5.44,6.19,6.29,6.14,6.11,5.89,6.05,5.88,5.94,5.99,6.62,6.74,6.91,7.3,6.36,5.99,5.8,5.45,5.65,6.08,5.88,5.37,5.48,5.8,5.99,5.24,5.38,5.72,5.54,6.78,6.18,6.79,7.8,8.46,7.59,6.99,7.76,7.85,7.81,8.45,8.83,8.96,8.91,9.09,10.58,12.51,12.31,11.1,12.98,12.56,12.63,11.34,12.26,12.85,14.07,13.01,12.56,10.86,10.48,8.36,8.92,8.57,7.1,6.82,6.03,4.98,4.8,4.41,4.12,4.61,4.48,4.15,4.04,4.79,4.21,4.36,4.74,6.02,6.84,6.39,6.35,6.83,5.59,5.69,5.74,4.81,5.26,5.58,5.22,5.35,6.94,7.72,6.66,6.73,6.28,6,6.05,6.85,8.01,10.95,11.5,11.53,14.88,16.29,16.63,16.62,17.24,16.02,16.5,15.81,16,13.82,14.32,15.24,14.5,14.32,14.88,13.6,12.77,13.27,15.44,16.48,17.2,18.8,17.08,18.19,19.81, 17.85, 15.33, 14.53, 13.79, 13.61, 16.06],		
      zIndex: 2
    },{
      name: 'Severe Drought',
      data: [7.9,8.27,8.67,8.45,8.53,9.21,9.13,9.14,11.75,12.59,13.43,13.06,10.42,12.08,11.43,12.2,9.67,9.66,9.34,10.52,8.84,7.23,6.19,5.78,6.25,6.75,3.3,2.96,2.86,3.52,4.62,5.33,7.27,7.17,7.5,9.46,12.84,14.9,14.3,16.05,15.42,12.67,8,6.61,4.14,5.1,6.74,6.95,6.89,6.85,5.55,5.48,4.34,4.27,3.84,3.97,3.45,3.72,3.38,3.32,3.31,3.23,6.57,7.07,7.11,7.28,7.29,7.24,7.34,7.45,9.37,10.49,9.03,9.3,9.02,8.93,10.52,12.04,11.54,10.87,11.84,11.28,10.49,11.07,11.37,10.05,9.57,8.39,8.84,8.84,8.7,7.78,7.48,7.65,8.12,9.15,9.12,9.81,11.31,10.85,11.92,11.04,12.02,12.09,11.66,11.67,10.44,10.13,9.52,9.2,9.44,9.3,10.32,10.44,12.36,11.25,14.15,16.05,16.84,17.27,17.08,15.91,16.94,12.45,11.3,11.11,10.99,11.42,11.57,11.32,11.47,10.55,10.62,11.16,10.15,10.49,9.97,9.52,9.84,12.28,14.64,14.34,14.12,12.99,12.95,12.85,12.46,12.17,12.87,10.89,10.62,10.6,11.15,14.29,14.09,13.99,13.42,12.45,11.54,10.18,10.05,9.58,10.15,9.87,10.49,10.55,10.9,10.45,11.46,11.42,10.36,10.67,10.74,12.75,10.51,9.06,12.81,11.97,12.1,11.44,9.31,9.56,9.16,9.08,9.46,9.42,11.58,12.72,14.37,14.03,15.39,14.5,16.44,14.48,14.23,13.63,14.15,13.93,14.5,14.08,13.02,13.14,13.42,13.36,13.67,13.83,13.69,13.58,14.87,13.61,13.21,13.1,12.88,13.25,13.51,13.63,13.4,13.14,12.58,12.3,12.15,11.74,12.55,12.42,12.61,12.83,12.27,12.21,11.1,10.84,10.8,11,10.77,10.96,10.44,10.76,11.34,11.32,10.83,10.94,10.42,9.73,9.54,9.36,9.82,9.95,10.26,10.13,10.17,9.72,9.25,9.12,9.02,8.38,8.14,8.19,8.55,8.36,8.21,8.51,8.34,7.92,7.34,7.18,7.11,7.82,7.08,7.04,7.99,8.98,9.39,9.09,9.09,8.93,8.91,8.29,6.87,7.14,7.14,8.32,7.13,7.34,7.24,6.49,5.99,6.34,7.54,8.18,7.61,8.66,8.44,8.74,7.88,7.34,6.86,6.41,6.99,7.08,6.73,5.39,5.02,3.94,3.6,3.59,3.74,3.06,4.11,4.79,4.7,3.91,4.23,3.84,3.8,3.78,3.71,4.01,5.21,5.79,6.46,6.6,7.25,7.74,8.12,8.46,9.6,10.45,9.15,10.51,10.98,9.83,8.29,4.56,5.13,5.68,6.68,8.22,8.25,8.52,8.55,9.44,10.11,15.51,14.87,14.48,15.73,15.48,15.14,12.23,11.43,9.86,7.5,8.1,8.11,8.46,8.37,8.76,7.93,6.84,6.73,5.94,5.47,5.84,6.09,6.27,6,5.59,6.01,5.89,6.73,7.02,7.35,7.54,7.62,7.3,6.89,6.4,6.65,7.8,6.2,6.87,8.22,8.21,8.48,7.89,8.79,8.97,9,8.76,9.89,9.63,9.81,9.57,10.93,11.24,15.57,18.37,18.12,19.11,17.39,16.98,16.85,16.54,16.58,15.22,14.74,14.71,14.28,13.19,12.54,12.53,12.5,12,12.27,12.14,12.11,12.07,12.01,12.23,11.32,12.32,11.47,9.86,9.46,9.21,9.43,9.78,10.01,9.78,9.16,8.41,5.74,4.49,6.06,5.54,6.69,5.47,5.46,5.92,5.41,5.68,5.9,6.54,6.09,6.44,6.47,6.16,5.83,6.94,7.27,7.09,7.14,6.11,5.56,5.42,5.17,5.54,5.93,6.13,6.12,6.5,6.46,5.71,5.67,5.37,5.21,4.92,5.41,4.77,4.53,4.2,3.99,4.08,3.92,5.04,5.57,5.67,5.46,5.29,5.4,4.65,4.99,5.21,4.89,6.08,5.93,5.72,5.07,4.44,4.09,4.47,3.5,3.88,3.89,3.78,3.41,3.18,3.55,3.59,3.94,3.93,3.57,3.26,3.3,3.14,3.08,3.06,3.52,3.91,4.13,4.17,5.27,3.92,3.51,3.44,3.49,3.72,4.02,4,4.07,3.59,3.42,3.42,3.42,4.87,4.5,1.27,1.21,1.18,1.29,1.38,1.35,1.97,1.94,1.87,1.7,1.71,1.69,1.88,2.21,2.21,2.21,2.29,1.95,2.35,2.1,1.52,1.33,1.25,0.97,0.93,0.97,1.33,1.42,1.4,1.29,1.1,1.14,1.37,1.7,2.22,2.36,2.02,3.1,3.82,3.97,4.32,4.27,3.98,4.43,4.43,4.78,4.84,5.42,5.62,4.96,4.43,4.85,5.77,7.51,6.88,6.85,7.84,8.51,8.27,8.11,8.48,9.88,7.88,7.79,7.63,6.4,6.36,6.73,6.28,5.69,5.02,4.66,4.49,3.64,4.1,4.15,4.19,4.34,4.74,5.76,5.24,5.07,5.18,5.42,4.47,4.68,4.76,4.74,4.84,5.66,5.25,5.62,5.56,5.45,5.69,5.62,5.82,6.08,6.72,6.91,7.51,7.27,7.63,7.19,7.27,7.42,7.43,7.28,8.15,9.97,10.12,11.39,10.34,10.64,10.9,11.23,10.94,11.15,11.3,10.79,10.64,11.33,11.49,11.99,12.75,15.97,18.57,20.01,21.4,24.00, 20.91, 19.5, 18.3, 18.3, 17.59],
      zIndex: 3
    },{
      name: 'Extreme Drought',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.24,1.39,1.39,2.5,3,4.03,4.27,4.85,4.25,2.39,2.56,2.54,2.8,2.2,2.11,1.97,2.03,2.52,3.68,4.58,6.01,5.63,5.14,5.22,4.52,5.05,5.01,5.4,5.43,4.27,2.21,0.6,0.57,0.71,0.49,0.5,0.52,0.91,1.01,0.52,0.45,0.58,0.84,0.91,0.85,0.8,0.75,0.7,0.69,1.05,1.03,1.07,1.07,1.07,1.44,1.96,1.74,1.65,1.63,1.62,1.61,1.66,3.35,3.17,2.97,2.95,4.37,4.37,4.18,6,7.11,7.42,7.82,7.82,7.84,8.06,8.36,8.36,8.36,8.32,9.53,9.53,9.24,9.13,7.87,7.26,7.22,6.79,7.31,5.27,4.82,4.71,4.43,4.6,4.41,4.71,4.81,4.73,5.65,5.53,5.37,4.37,4.68,5.64,7.82,9.75,9.01,13.19,13.59,12.44,11.82,12.2,12.91,13.71,13.06,12.53,13.2,13.84,13.7,13.57,13.34,13.25,13.44,12.7,12.96,13.4,12.95,12.28,12.34,12.13,11.8,11.49,11.21,10.38,10.38,10.38,10.16,10.36,10.54,10.55,10.84,12.21,13.19,15.19,15.34,15.28,15.33,15.06,14.9,14.96,14.72,14.61,13.27,12.54,12.13,11.9,11.77,10.66,8.86,8.15,7.98,8.06,7.95,7.7,8.29,8.2,8.42,8.89,9.77,11.01,10.82,10.82,11.19,12.75,13.92,12.68,13.24,12.52,12.35,12.35,12.26,12.93,12.73,13.15,13.16,12.62,12.14,11.99,11.63,11.6,11.85,11.63,10.51,10.47,10.67,10.61,10.47,10.02,9.75,9.7,9.93,8.73,8.8,8.7,8.95,9.32,8.06,7.97,8.4,8.12,9.14,9.41,9.22,10.12,10.03,10.09,9.42,8.31,8.2,7.83,7.87,7.68,7.81,7.99,8.43,8.97,8.69,8.63,7.95,7.77,7.33,7.32,7.08,7.22,7.22,6.18,6.19,5.95,5.91,5.81,4.64,4.64,4.48,4.57,4.68,4.3,3.42,3.41,3.58,3.47,3.83,3.95,4.01,3.5,3.53,4.28,4.28,3.61,3.54,3.36,3.54,3.26,3.31,2.75,1.58,1.58,1.58,0.9,0.42,0,0.59,1.37,1.15,1.25,1.62,1.54,1.53,0.83,0.7,0.7,0.95,1.16,0.83,0.62,0.68,0.7,0.67,0.84,0.84,0.75,0.8,0.8,0.88,1.16,1.39,1.89,1.89,1.96,2.51,2.49,3.09,3.18,4.59,4.84,4.97,4.96,5.92,5.6,3.27,2.59,2.47,2.37,3.58,4.64,3.12,4.39,4.58,4.82,4.67,5.92,7.2,7.01,6.46,6.28,3.94,5.29,8.42,8.43,8.51,7.79,7.55,6.87,7.12,7.39,6.03,5.4,5.57,5.38,5.05,5.1,5.05,4.76,4.87,5.2,5.98,4.98,4.69,4.67,4.49,4.67,4.96,4.76,4.25,4.27,4.27,4.5,4.36,3.71,3.08,4.42,4.34,3.91,2.54,2.51,2.88,3.38,3.95,4.28,4.59,5.55,5.76,5.09,4.66,5.3,5.38,5.28,4.86,4.84,4.94,5.11,5.69,6.41,8.05,8.38,8.16,7.93,8.29,7.96,7.22,7.4,7.36,5.53,4.75,4.63,4.04,4.28,4.31,2.43,2.23,2.23,2.22,2.82,1.84,1.89,1.65,1.76,1.6,1.61,1.64,1.89,1.99,1.9,2.12,2.1,2.38,2.19,1.73,1.86,1.84,1.83,1.74,1.3,1.37,1.48,1.96,3.31,3.45,2.99,2.73,2.2,2.32,2.84,2.82,2.9,1.95,1.49,1.2,1.09,1.05,1.13,1.41,1.32,1.37,1.37,1.35,1.41,1.2,1.13,1.31,1.27,1.23,1.02,0.84,0.74,0.71,1.07,1.59,1.75,1.92,1.85,1.73,1.64,1.21,1.08,1.07,1.07,1.3,1.3,1.07,0.96,0.99,1.05,1.11,0.96,0.78,0.74,0.73,0.66,0.54,0.65,0.61,0.51,0.61,0.44,0.9,0.9,0.82,0.56,0.67,0.66,0.92,1.03,0.86,0.52,0.43,0.47,0.33,0.33,0.26,0.26,0.4,0.41,0.34,0.17,0.17,0.17,0.17,0.32,0.32,0.13,0.02,0.02,0.02,0.02,0.02,0.04,0.04,0.04,0.04,0.03,0.03,0.03,0.04,0.04,0.04,0.06,0.19,0.43,0.44,0.44,0.44,0.37,0.25,0.25,0.25,0.28,0.29,0.29,0.17,0.17,0.17,0.23,0.23,0.3,0.3,0.31,0.48,0.94,1.04,1.15,1.17,1.08,0.99,0.68,1.1,1.2,1.64,1.98,2.17,1.99,1.82,1.74,1.35,1.2,1.2,1.73,1.92,2.24,2.8,3.99,5.36,6.96,6.74,7.06,7.68,7.14,5.47,5.97,6.55,7.04,6.63,6.18,5.15,5.38,5.72,5.61,5.95,5.96,6.15,5.86,5.46,5.09,5.89,5.72,5.67,5.54,5.37,5.27,6.15,6.29,6.44,7.42,7.3,7.12,7.02,7.51,7.54,6.92,5.67,5.61,5.74,5.96,6.22,5.9,5.36,5.04,5.1,4.36,4.3,4.02,4.08,3.91,3.83,3.96,3.92,3.92,4.03,4.19,4.33,3.93,4.18,3.83,3.36,3.05,4.11,6.81,8.14,9.09,10.49, 15.21, 16.1, 16.67, 14.56, 13.97],	
      zIndex: 4
    },{
      name: 'Exceptional Drought',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.22,0.25,1.28,1.37,1.39,1.05,1.38,1.77,2.16,0,1.78,1.66,2,2.06,2.18,1.43,1.37,0.62,0.62,0.39,0.87,1.41,2.2,0.83,0.6,0,0,0.11,0.21,0.25,0.3,0.28,0.28,0.28,0.29,0.29,0.28,0.51,0.53,0.61,0.59,0.59,0.57,0.54,0.15,0.17,0.22,0.22,0.22,0.22,0.38,0.41,0.41,0.33,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.23,0.51,0.54,0.51,2.28,2.26,1.73,2.07,2.93,4.42,4.6,4.61,5,5.1,5.83,6.22,6.56,6.19,5.2,4.18,3.24,2.75,2.62,1.75,1.12,1.12,1.13,1.11,0.93,0.96,0.93,0.91,1.05,1.07,1.07,1.07,1.41,2.15,1.97,2.09,1.88,1.93,1.74,1.74,1.67,1.41,1.41,1.02,0.49,0.22,0.19,0.22,0.22,0.22,0.52,0.5,0.5,0.51,0.85,0.84,0.74,0.63,0.68,0.68,1.39,1.8,1.65,1.63,1.77,1.84,1.61,1.85,1.83,1.73,1.75,1.73,1.71,1.7,2.12,2.18,2.79,2.65,2.75,2.8,2.76,2.82,3.11,2.84,3.1,2.63,2.41,2.52,2.48,2.36,2.36,2.36,1.74,1.61,1.61,1.61,1.61,0.54,0.68,0.7,0.7,0.9,0.91,0.93,0.67,0.67,0.49,1.07,1.02,1.02,1,1,1.19,1.15,1.15,1.05,1.05,1.03,1.01,0.99,0.81,0.78,0.78,0.78,0.83,0.81,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.75,0.77,0.77,0.64,0.63,0.6,0.6,0.6,0.87,0.87,0.87,1.1,1.11,1.31,1.31,1.26,1.21,1.24,1.28,0.71,0.56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.45,0.45,0.51,0.55,0.64,0.73,0.45,0.51,0.48,0.53,1.02,1.02,1.14,0.94,0.94,0.94,0.94,1.06,1.03,1.52,1.42,1.13,1.13,1.08,0.99,0.98,0.98,1.05,0.79,0.52,0.84,1.04,1.05,1.59,1.68,1.67,1.45,0.87,1.21,0.25,0.12,0.12,0.2,0.24,0,0,0,0,0.14,0.22,0.15,0.51,0.51,0.4,0.28,0.28,0.26,0.18,0.18,0.18,0.19,0.15,0.15,0.15,0.15,0.15,0,0,0,0,0,0,0,0,0,0,0.31,0.74,1,0.77,0.64,0.43,0.43,0.33,0.55,1.28,1.95,2.39,2.32,2,2.36,1.93,1.9,2.8,2.95,3.61,3.32,1.84,2.06,2.27,2.45,2.41,2.71,3.13,3.13,3.13,1.99,2.09,1.82,1.82,1.91,1.8,1.8,1.72,0.91,0.75,0.32,0.09,0,0,0,0.24,0.24,0.24,0,0,0,0,0,0,0.26,0.35,0.66,0.74,0.7,1.02,0.81,0.81,0.8,0.64,0.12,0.12,0.12,0.12,0.15,0.15,0.15,0.1,0.1,0.1,0.16,0.37,0.37,0.43,0.52,0.64,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.49,0.56,0.63,0.63,0.71,0.71,0.52,0.52,0.52,0.52,0.85,0.83,0.72,0.72,1.1,0.63,0.5,0.48,0.56,0.56,0.6,0.82,1.04,1.32,1.21,1.38,1.24,1.24,1.33,1.39,1.28,1.18,0.25,0.28,0.23,0.11,0.11,0.11,0.07,0.07,0.07,0.07,0.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.35,0.78,1.19,1.39,2.6,4.96,5.04,4.69,5.23,6.52,7.54,9.89,9.97,9.83,9.99,9.11,9.23,9.13,9.58,9.05,9.31,9.37,9.36,9.81,9.48,9.5,9.77,8.15,8.28,7.98,7.4,7.33,7.27,6.78,5,4.01,3.83,3.66,2.76,2.77,2.19,2.31,2.29,2.66,2.63,2.69,2.03,2.09,2.04,2.02,1.84,1.8,1.61,1.72,1.58,1.55,1.61,1.34,0.85,0.8,0.55,0.5,0.24,0.24,0.34,0.5,0.62,0.83, 1.99, 3.01, 4.21, 5.23, 5.27],
      zIndex: 5
    }]
});


