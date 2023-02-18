
let men_teams = [

    ["OLS", 2758],
    ["EräViikingit", 17907],
    ["Classic", 2993],
    ["FBC Turku", 11033],
    ["Indians", 3587],
    ["Jymy", 3503],
    ["Oilers", 1974],
    ["Happee", 2126],
    ["TPS", 3438],
    ["Nokian KrP", 2682],
    ["LASB", 17808],
    ["SPV", 3266],

];

let xG_matrix = [

    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 16.67, 0.0, 16.67, 40.0, 0.0, 22.22, 54.55, 0.0, 25.0, 0.0, 0.0],
    [0.0, 21.43, 16.67, 0.0, 11.88, 41.79, 60.71, 31.39, 10.25, 10.39, 0.0, 7.89, 0.0],
    [3.0, 4.0, 13.24, 13.9, 19.26, 38.28, 42.19, 31.88, 15.53, 12.96, 8.57, 4.29, 3.0],
    [4.0, 7.14, 12.7, 14.29, 17.87, 26.11, 28.17, 23.4, 13.77, 11.86, 8.72, 6.75, 4.0],
    [3.45, 7.51, 9.2, 11.76, 16.45, 21.8, 24.47, 19.66, 14.41, 9.27, 6.43, 5.71, 5.56],
    [5.86, 6.29, 8.86, 11.95, 15.53, 18.56, 20.68, 15.78, 11.88, 9.12, 6.01, 6.65, 5.0],
    [5.03, 6.9, 7.48, 9.75, 13.65, 16.0, 15.29, 13.7, 8.85, 6.38, 6.25, 7.56, 4.55],
    [4.02, 6.16, 6.15, 9.64, 8.85, 12.64, 12.73, 10.48, 8.68, 5.59, 5.29, 5.33, 5.41],
    [3.16, 4.88, 5.34, 5.56, 7.28, 9.76, 9.65, 9.82, 6.25, 6.18, 3.52, 6.16, 5.5],
    [2.69, 4.91, 4.57, 5.44, 5.7, 7.35, 7.15, 6.38, 5.29, 4.39, 2.5, 5.76, 4.33],
    [1.89, 2.41, 3.3, 3.55, 4.77, 5.24, 5.28, 5.98, 5.32, 4.31, 3.84, 3.93, 3.33],
    [1.86, 3.33, 1.29, 3.27, 3.31, 5.03, 5.74, 4.76, 3.2, 2.83, 4.64, 4.55, 2.0],
    [1.56, 1.98, 2.72, 2.32, 3.88, 4.38, 4.9, 4.03, 2.67, 2.05, 2.39, 1.22, 1.09],

    ];

let xGOT_matrix = [

    [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
    [0.0, 0.0, 25.0, 0.0, 16.67, 66.67, 0.0, 28.57, 60.0, 0.0, 25.0, 0.0, 0.0],
    [4.0, 10.08, 16.67, 17.0, 18.46, 46.06, 62.96, 38.45, 14.62, 16.0, 12.0, 9.38, 4.0],
    [4.0, 5.56, 18.75, 20.97, 27.52, 43.92, 46.41, 37.84, 22.97, 21.78, 16.54, 6.67, 4.0],
    [5.0, 13.79, 23.13, 23.19, 26.32, 31.98, 33.8, 30.16, 21.49, 21.49, 18.52, 15.49, 6.0],
    [9.09, 15.83, 18.09, 20.53, 25.98, 30.73, 33.88, 29.69, 24.7, 18.95, 13.52, 12.93, 10.29],
    [12.0, 12.91, 18.07, 22.28, 27.26, 30.6, 32.72, 28.78, 24.11, 20.1, 14.47, 16.13, 12.0],
    [12.28, 16.48, 17.2, 20.85, 27.9, 31.02, 29.25, 29.08, 21.58, 16.47, 16.17, 18.05, 9.09],
    [14.75, 16.4, 16.47, 24.29, 22.33, 30.22, 28.02, 27.85, 24.12, 16.49, 15.16, 14.07, 13.33],
    [10.14, 13.18, 15.24, 16.27, 21.33, 25.98, 25.43, 27.54, 20.81, 18.95, 10.76, 14.97, 12.53],
    [8.21, 14.01, 14.16, 17.5, 18.62, 22.34, 22.07, 20.78, 18.26, 14.04, 12.86, 12.67, 8.33],
    [5.76, 7.32, 10.56, 12.7, 15.67, 17.67, 17.12, 20.0, 16.59, 13.64, 12.59, 7.02, 4.33],
    [4.33, 7.81, 3.88, 10.45, 10.26, 14.56, 16.72, 14.69, 9.32, 11.11, 12.5, 10.0, 7.0],
    [4.09, 10.43, 11.11, 14.46, 14.29, 15.25, 14.69, 11.0, 10.76, 9.58, 9.33, 10.33, 4.29]

    ];

