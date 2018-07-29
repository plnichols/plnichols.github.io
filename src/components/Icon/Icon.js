import React from 'react';

const Icon = ({ type, size, style, className }) => {
  // prettier-ignore
  const icons = {
    angular: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 913.256 795.693 L 505.625 1021.071 L 505.625 628.44 L 645.501 628.44 L 710.377 778.442 L 815.754 780.317 L 506.374 121.807 L 505.625 123.473 L 505.625 2.93 L 992.007 168.683 Z M 507.124 332.185 L 606.876 540.688 L 505.625 540.688 L 505.625 335.747 Z"/><path opacity="0.7" d="M 31.992 171.683 L 505.624 2.93 L 506.005 3.06 L 506.005 122.628 L 211.244 778.442 L 321.496 776.567 L 380.747 628.44 L 506.005 628.44 L 506.005 1020.86 L 505.624 1021.071 L 104.368 798.318 Z M 419.373 540.688 L 506.005 334.844 L 506.005 540.688 Z"/></g>},
    code: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M673.68 708.33l80.85 80.84 269.47-269.48-269.47-269.47-80.85 80.84 188.64 188.63-188.64 188.64z"/><path d="M350.32 331.060l-80.85-80.84-269.47 269.47 269.47 269.48 80.85-80.84-188.64-188.64 188.64-188.63z"/><path d="M622.12 231.24l-161.67 592.87-58.5-15.96 161.67-592.86 58.5 15.95z"/></g>},
    codepen: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M945.75 368.042l-448-298.666c-10.748-7.166-24.752-7.166-35.5 0l-448 298.666c-8.902 5.934-14.25 15.926-14.25 26.624v298.666c0 10.7 5.348 20.692 14.25 26.624l448 298.666c5.374 3.584 11.562 5.376 17.75 5.376s12.376-1.792 17.75-5.376l448-298.666c8.902-5.934 14.25-15.926 14.25-26.624v-298.666c0-10.698-5.348-20.69-14.25-26.624zM480 654.876l-166.312-110.876 166.312-110.874 166.312 110.874-166.312 110.876zM512 377.542v-221.75l358.31 238.876-166.31 110.874-192-128zM448 377.542l-192 128-166.312-110.874 358.312-238.876v221.75zM198.312 544l-134.312 89.542v-179.082l134.312 89.54zM256 582.458l192 128v221.748l-358.312-238.872 166.312-110.876zM512 710.458l192-128 166.312 110.876-358.312 238.874v-221.75zM761.688 544l134.312-89.54v179.084l-134.312-89.544z"/></g>},
    css: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M152.388 48.522l-34.36 171.926h699.748l-21.884 111.054h-700.188l-33.892 171.898h699.684l-39.018 196.064-282.012 93.422-244.4-93.422 16.728-85.042h-171.898l-40.896 206.352 404.226 154.704 466.006-154.704 153.768-772.252z"/></g>},
    git: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M1004.692 466.394l-447.096-447.080c-25.738-25.754-67.496-25.754-93.268 0l-103.882 103.876 78.17 78.17c12.532-5.996 26.564-9.36 41.384-9.36 53.020 0 96 42.98 96 96 0 14.82-3.364 28.854-9.362 41.386l127.976 127.974c12.532-5.996 26.566-9.36 41.386-9.36 53.020 0 96 42.98 96 96s-42.98 96-96 96-96-42.98-96-96c0-14.82 3.364-28.854 9.362-41.386l-127.976-127.974c-3.042 1.456-6.176 2.742-9.384 3.876v266.968c37.282 13.182 64 48.718 64 90.516 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-41.796 26.718-77.334 64-90.516v-266.968c-37.282-13.18-64-48.72-64-90.516 0-14.82 3.364-28.852 9.36-41.384l-78.17-78.17-295.892 295.876c-25.75 25.776-25.75 67.534 0 93.288l447.12 447.080c25.738 25.75 67.484 25.75 93.268 0l445.006-445.006c25.758-25.762 25.758-67.54-0.002-93.29z"/></g>},
    github: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"/></g>},
    html: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 355.328 301.568 L 365.568 417.28 L 515.584 417.28 L 515.584 301.568 Z M 262.656 530.432 L 234.496 218.624 L 231.936 188.416 L 515.584 188.416 L 515.584 75.264 L 884.224 75.264 L 814.08 862.72 L 515.584 945.664 L 515.584 828.416 L 514.56 828.416 L 283.136 764.416 L 267.264 586.752 L 380.928 586.752 L 389.12 676.864 L 515.072 710.656 L 515.584 710.656 L 515.584 530.432 Z M 966.656 0 L 64 0 L 145.92 921.6 L 514.56 1024 L 884.224 921.6 Z"/><path opacity="0.8" d="M 515.072 530.432 L 515.072 417.28 L 515.584 417.28 L 515.584 530.432 Z M 777.728 417.28 L 774.656 447.488 L 748.544 744.96 L 746.496 764.416 L 515.584 828.274 L 515.584 945.664 L 814.08 862.72 L 884.224 75.264 L 515.584 75.264 L 515.584 188.416 L 798.208 188.416 L 795.136 218.624 L 790.016 275.968 L 787.968 301.568 L 515.584 301.568 L 515.584 417.28 Z M 515.072 828.416 L 515.072 710.656 L 515.584 710.519 L 515.584 828.274 Z M 641.024 676.864 L 654.336 530.432 L 515.584 530.432 L 515.584 710.519 Z M 515.072 188.416 L 515.584 188.416 L 515.584 301.568 L 515.072 301.568 Z"/><path opacity="0.2" d="M 355.328 301.568 L 365.568 417.28 L 515.584 417.28 L 515.584 530.432 L 262.656 530.432 L 234.496 218.624 L 231.936 188.416 L 515.584 188.416 L 515.584 301.568 Z M 380.928 586.752 L 389.12 676.864 L 515.072 710.656 L 515.584 710.656 L 515.584 828.416 L 514.56 828.416 L 283.136 764.416 L 267.264 586.752 Z"/></g>},
    javascript: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 0 0 L 1024 0 L 1024 1024 L 0 1024 Z M 269.247 855.729 L 269.249 855.728 C 269.248 855.726 269.247 855.724 269.246 855.722 Z M 269.249 855.728 C 291.932 903.839 336.617 943.705 413.594 943.705 C 498.832 943.705 557.255 898.338 557.255 798.669 L 557.255 470.116 L 461.025 470.116 L 461.025 797.308 C 461.025 845.42 441.089 857.789 409.469 857.789 C 376.481 857.789 362.729 835.109 347.611 808.305 Z M 609.528 845.418 C 637.706 901.097 695.446 943.712 784.804 943.712 C 876.223 943.712 944.272 896.288 944.272 809.674 C 944.272 729.254 898.216 693.515 816.418 658.457 L 792.362 648.147 C 751.124 630.275 733.251 618.586 733.251 589.716 C 733.251 566.349 751.124 548.478 779.307 548.478 C 806.801 548.478 824.667 560.161 841.165 589.716 L 916.089 541.603 C 884.473 485.925 840.482 464.614 779.305 464.614 C 693.38 464.614 638.391 519.606 638.391 591.78 C 638.391 670.142 684.446 707.26 753.875 736.811 L 777.926 747.129 C 821.918 766.368 848.037 778.055 848.037 811.049 C 848.037 838.545 822.611 858.48 782.738 858.48 C 735.312 858.48 708.504 833.737 687.878 800.052 L 609.524 845.418 Z"/></g>},
    linkedin: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832h-128v-448h128v448zM320 320c-35.4 0-64-28.6-64-64s28.6-64 64-64c35.4 0 64 28.6 64 64s-28.6 64-64 64zM832 832h-128v-256c0-35.4-28.6-64-64-64s-64 28.6-64 64v256h-128v-448h128v79.4c26.4-36.2 66.8-79.4 112-79.4 79.6 0 144 71.6 144 160v288z"/></g>},
    mobile: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"/></g>},
    npm: { width:'1em', height:'0.5em', viewbox: '2048 1024', path: <g><path d="M 569.328 227.336 L 569.328 682.008 L 454.672 682.008 L 454.672 341.992 L 340.016 341.992 L 340.016 682.008 L 114.656 682.008 L 114.656 227.336 Z M 1138.656 227.336 L 1138.656 682.008 L 913.296 682.008 L 913.296 796.664 L 683.984 796.664 L 683.984 227.336 Z M 1024 341.992 L 913.298 341.992 L 913.298 567.352 L 1024 567.352 Z M 1937.298 227.336 L 1937.298 682.008 L 1822.64 682.008 L 1822.64 341.992 L 1707.984 341.992 L 1707.984 682.008 L 1593.328 682.008 L 1593.328 341.992 L 1478.672 341.992 L 1478.672 682.008 L 1253.312 682.008 L 1253.312 227.336 Z M 0 112.68 L 0 796.664 L 569.328 796.664 L 569.328 911.32 L 1024 911.32 L 1024 796.664 L 2048 796.664 L 2048 112.68 Z" /></g>},
    react: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M603.264 512c0 50.404-40.86 91.264-91.264 91.264s-91.264-40.86-91.264-91.264c0-50.404 40.86-91.264 91.264-91.264s91.264 40.86 91.264 91.264z"/><path d="M256.341 693.547l-20.139-5.12c-150.101-37.931-236.203-102.315-236.203-176.597s86.101-138.667 236.203-176.597l20.139-5.077 5.675 19.968c17.427 59.534 37.207 110.167 60.77 158.621l-2.615-5.96 4.309 9.088-4.309 9.088c-21.008 42.541-40.79 93.177-56.362 145.624l-1.793 7.037-5.675 19.925zM226.859 381.867c-114.091 32.043-184.107 81.067-184.107 129.963 0 48.853 70.016 97.877 184.107 129.963 16.375-51.835 33.476-94.868 53.189-136.421l-2.757 6.459c-16.998-35.141-34.1-78.175-48.354-122.486l-2.078-7.477zM767.659 693.547l-5.675-20.011c-17.397-59.48-37.192-110.1-60.795-158.523l2.598 5.904-4.309-9.088 4.309-9.088c20.991-42.518 40.785-93.152 56.391-145.59l1.806-7.071 5.675-19.968 20.181 5.077c150.059 37.931 236.16 102.315 236.16 176.64s-86.101 138.667-236.16 176.597l-20.181 5.12zM746.709 511.829c20.48 44.331 37.419 87.893 50.432 129.963 114.133-32.085 184.107-81.109 184.107-129.963 0-48.896-70.016-97.877-184.107-129.963-16.34 51.795-33.441 94.829-53.171 136.372l2.739-6.41z"/><path d="M226.56 381.653l-5.675-19.925c-42.197-148.736-29.397-255.317 35.115-292.523 63.275-36.523 164.864 6.613 271.317 115.883l14.507 14.891-14.507 14.891c-36.676 38.083-70.629 79.417-101.171 123.302l-2.168 3.29-5.76 8.235-10.027 0.853c-59.99 4.821-115.073 14.042-168.464 27.517l6.97-1.49-20.139 5.077zM307.456 98.773c-11.435 0-21.547 2.475-30.080 7.381-42.411 24.448-49.92 109.44-20.693 224.128 38.731-9.119 85.784-16.673 133.752-21.066l4.19-0.31c28.61-40.451 57.346-75.851 88.205-109.26l-0.653 0.716c-66.56-64.811-129.579-101.589-174.72-101.589zM716.587 967.552c-0.043 0-0.043 0 0 0-60.8 0-138.88-45.781-219.904-128.981l-14.507-14.891 14.507-14.891c36.663-38.090 70.602-79.438 101.126-123.338l2.17-3.297 5.76-8.235 9.984-0.853c60.002-4.793 115.118-14 168.539-27.471l-6.961 1.487 20.139-5.077 5.717 19.968c42.112 148.651 29.355 255.275-35.157 292.437-14.374 8.272-31.607 13.151-49.98 13.151-0.504 0-1.007-0.004-1.509-0.011l0.076 0.001zM541.824 823.296c66.56 64.811 129.579 101.589 174.72 101.589h0.043c11.392 0 21.547-2.475 30.037-7.381 42.411-24.448 49.963-109.483 20.693-224.171-38.768 9.137-85.837 16.691-133.824 21.070l-4.16 0.306c-28.571 40.473-57.296 75.887-88.158 109.297l0.648-0.71z"/><path d="M797.44 381.653l-20.139-5.077c-46.487-12.029-101.603-21.252-158.039-25.797l-3.539-0.229-9.984-0.853-5.76-8.235c-32.67-47.183-66.61-88.519-103.593-126.902l0.297 0.31-14.507-14.891 14.507-14.891c106.411-109.227 207.957-152.363 271.317-115.883 64.512 37.205 77.312 143.787 35.157 292.48l-5.717 19.968zM629.333 308.907c48.725 4.437 95.019 11.648 137.984 21.376 29.269-114.688 21.717-199.68-20.693-224.128-42.155-24.363-121.387 12.971-204.8 94.208 30.188 32.69 58.911 68.089 85.298 105.262l2.212 3.282zM307.456 967.552c-0.439 0.007-0.956 0.011-1.475 0.011-18.373 0-35.607-4.88-50.476-13.414l0.495 0.262c-64.512-37.163-77.312-143.744-35.115-292.437l5.632-19.968 20.139 5.077c49.28 12.416 103.637 21.163 161.493 25.984l10.027 0.853 5.717 8.235c32.719 47.191 66.671 88.538 103.646 126.955l-0.307-0.321 14.507 14.891-14.507 14.891c-80.981 83.2-159.061 128.981-219.776 128.981zM256.683 693.333c-29.269 114.688-21.717 199.723 20.693 224.171 42.112 24.021 121.301-13.013 204.8-94.208-30.181-32.703-58.917-68.115-85.33-105.292l-2.222-3.294c-52.126-4.681-99.18-12.235-145.102-22.757l7.161 1.381z"/><path d="M512 720.128c-35.115 0-71.211-1.536-107.349-4.523l-10.027-0.853-5.76-8.235c-17.419-24.566-36.456-54.116-54.294-84.456l-3.306-6.082c-14.479-24.255-31.065-55.411-46.384-87.29l-3.365-7.771-4.267-9.088 4.267-9.088c18.676-39.64 35.262-70.796 53.052-101.162l-3.303 6.1c17.664-30.549 37.077-61.013 57.6-90.539l5.76-8.235 10.027-0.853c32.164-2.894 69.575-4.544 107.371-4.544s75.208 1.65 112.166 4.882l-4.795-0.338 9.984 0.853 5.717 8.235c37.651 53.308 73.422 114.148 104.065 177.917l3.327 7.683 4.309 9.088-4.309 9.088c-33.853 71.409-69.628 132.255-110.056 189.584l2.664-3.984-5.717 8.235-9.984 0.853c-36.139 2.987-72.277 4.523-107.392 4.523zM418.261 673.877c63.147 4.736 124.331 4.736 187.52 0 32.123-46.25 63.305-99.337 90.466-154.753l3.23-7.295c-30.297-62.657-61.496-115.748-96.387-166.086l2.648 4.038c-28.060-2.262-60.749-3.552-93.739-3.552s-65.677 1.29-98.016 3.821l4.277-0.269c-32.27 46.312-63.469 99.404-90.57 154.865l-3.169 7.183c30.431 62.72 61.625 115.806 96.447 166.192l-2.709-4.144z"/></g>},
    sass: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 881.746 569.487 C 846.022 569.675 814.974 578.278 788.975 590.997 C 779.437 572.106 769.897 555.272 768.214 542.928 C 766.344 528.526 764.1 519.735 766.344 502.528 C 768.588 485.32 778.688 460.818 778.501 458.948 C 778.314 457.077 776.257 448.286 755.682 448.1 C 735.108 447.913 717.34 452.028 715.282 457.452 C 713.225 462.876 709.297 475.22 706.679 487.939 C 703.125 506.642 665.53 573.415 644.021 608.391 C 637.1 594.737 631.115 582.767 629.806 573.227 C 627.935 558.826 625.691 550.035 627.935 532.827 C 630.18 515.62 640.28 491.118 640.093 489.247 C 639.905 487.377 637.848 478.586 617.274 478.399 C 596.699 478.213 578.932 482.328 576.874 487.752 C 574.816 493.176 572.572 505.894 568.27 518.238 C 563.968 530.583 514.03 642.057 500.937 670.861 C 494.203 685.637 488.405 697.421 484.29 705.463 L 484.29 705.463 C 484.29 705.463 484.103 706.024 483.542 706.959 C 479.988 713.88 477.931 717.621 477.931 717.621 C 477.931 717.621 477.931 717.621 477.931 717.808 C 475.125 722.858 472.132 727.534 470.636 727.534 C 469.514 727.534 467.456 714.067 471.01 695.738 C 478.492 657.021 496.26 596.795 496.073 594.737 C 496.073 593.615 499.44 583.141 484.477 577.717 C 469.888 572.293 464.65 581.271 463.342 581.271 C 462.033 581.271 461.098 584.451 461.098 584.451 C 461.098 584.451 477.37 516.743 430.05 516.743 C 400.498 516.743 359.724 549.101 339.524 578.279 C 326.805 585.2 299.685 599.976 270.694 615.874 C 259.658 622.046 248.249 628.218 237.588 634.016 C 236.84 633.268 236.091 632.333 235.344 631.585 C 178.11 570.424 72.247 527.218 76.736 445.108 C 78.419 415.182 88.706 336.626 280.046 241.237 C 437.531 163.617 562.846 185.126 584.543 232.821 C 615.591 300.903 517.397 427.339 354.674 445.669 C 292.577 452.59 260.033 428.649 251.803 419.671 C 243.199 410.318 241.89 409.757 238.71 411.628 C 233.473 414.433 236.84 422.85 238.71 427.713 C 243.573 440.432 263.586 462.877 297.44 473.912 C 327.366 483.638 400.123 489.062 488.218 455.021 C 586.786 416.865 663.845 310.815 641.214 221.973 C 618.583 131.821 468.952 102.082 327.365 152.395 C 243.198 182.321 151.923 229.455 86.274 290.803 C 8.279 363.748 -4.065 427.153 0.985 453.713 C 19.127 547.979 149.118 609.328 201.114 654.778 C 198.496 656.275 196.064 657.583 194.007 658.706 C 168.009 671.612 68.879 723.421 44.191 778.223 C 16.135 840.32 48.68 884.835 70.189 890.82 C 136.962 909.336 205.604 876.043 242.451 821.055 C 279.297 766.066 274.808 694.617 257.788 661.886 C 257.601 661.512 257.414 661.138 257.04 660.764 C 263.773 656.836 270.694 652.721 277.427 648.794 C 290.706 640.938 303.799 633.644 315.022 627.659 C 308.662 645.054 303.987 665.815 301.742 695.741 C 298.937 730.904 313.339 776.541 332.229 794.497 C 340.646 802.352 350.559 802.539 356.918 802.539 C 378.989 802.539 388.902 784.21 399.937 762.513 C 413.404 735.953 425.561 705.093 425.561 705.093 C 425.561 705.093 410.411 788.512 451.56 788.512 C 466.523 788.512 481.673 769.06 488.406 759.147 L 488.406 759.334 C 488.406 759.334 488.78 758.773 489.528 757.464 C 491.025 755.032 491.96 753.535 491.96 753.535 L 491.96 753.162 C 497.945 742.688 511.412 718.934 531.425 679.469 C 557.236 628.594 582.112 565.002 582.112 565.002 C 582.112 565.002 584.356 580.526 592.025 606.337 C 596.514 621.487 605.866 638.134 613.347 654.219 C 607.362 662.636 603.621 667.312 603.621 667.312 C 603.621 667.312 603.621 667.312 603.809 667.499 C 598.946 673.859 593.708 680.779 587.911 687.512 C 567.523 711.827 543.209 739.696 539.842 747.738 C 535.913 757.277 536.849 764.198 544.331 769.809 C 549.755 773.924 559.481 774.485 569.394 773.924 C 587.723 772.614 600.629 768.125 606.988 765.32 C 616.902 761.766 628.498 756.342 639.346 748.299 C 659.359 733.523 671.516 712.389 670.394 684.52 C 669.833 669.183 664.783 653.845 658.61 639.444 C 660.481 636.825 662.164 634.207 664.034 631.588 C 695.643 585.39 720.145 534.703 720.145 534.703 C 720.145 534.703 722.389 550.227 730.058 576.039 C 733.799 589.131 741.467 603.346 748.201 617.187 C 718.462 641.315 700.132 669.371 693.586 687.7 C 681.802 721.741 690.967 737.078 708.362 740.632 C 716.217 742.315 727.44 738.574 735.669 735.021 C 746.143 731.654 758.488 725.856 770.27 717.252 C 790.283 702.476 809.548 681.902 808.426 654.033 C 807.865 641.315 804.498 628.783 799.822 616.626 C 825.073 606.152 857.617 600.354 899.139 605.217 C 988.17 615.691 1005.751 671.241 1002.384 694.621 C 999.017 718.001 980.313 730.719 974.141 734.647 C 967.969 738.575 965.911 739.884 966.473 742.69 C 967.221 746.804 970.214 746.618 975.45 745.87 C 982.745 744.56 1022.21 726.979 1023.893 683.96 C 1026.698 628.971 974.328 568.932 881.745 569.493 L 881.745 569.493 Z M 194.945 801.04 C 165.393 833.21 124.245 845.368 106.476 835.08 C 87.398 824.045 94.88 776.538 131.165 742.496 C 153.236 721.735 181.666 702.47 200.556 690.687 C 204.858 688.069 211.218 684.328 218.886 679.652 C 220.195 678.904 220.944 678.53 220.944 678.53 L 220.944 678.53 C 222.44 677.595 223.936 676.66 225.433 675.725 C 238.712 724.355 225.994 767.186 194.946 801.04 L 194.946 801.04 Z M 410.038 654.776 C 399.751 679.839 378.241 743.993 365.148 740.44 C 353.926 737.447 347.006 688.817 362.904 640.749 C 370.947 616.621 387.967 587.817 397.88 576.595 C 413.966 558.639 431.734 552.654 436.036 559.949 C 441.46 569.487 416.397 639.066 410.038 654.776 L 410.038 654.776 Z M 587.537 739.691 C 583.235 741.935 579.12 743.432 577.25 742.31 C 575.941 741.562 579.12 738.569 579.12 738.569 C 579.12 738.569 601.378 714.628 610.168 703.78 C 615.218 697.421 621.203 689.94 627.563 681.523 L 627.563 683.954 C 627.563 712.571 599.881 731.836 587.537 739.691 L 587.537 739.691 Z M 724.448 708.456 C 721.268 706.212 721.829 698.73 732.491 675.35 C 736.605 666.186 746.331 650.848 762.977 636.072 C 764.848 642.057 766.157 647.856 765.97 653.28 C 765.783 689.378 739.971 702.845 724.448 708.456 L 724.448 708.456 Z"/></g>},
    webpack: { width:'1em', height:'1em', viewbox: '1024 1024', path: <g><path d="M 496.309 765.872 L 277.316 645.289 L 277.316 406.682 L 496.309 533.064 Z M 527.691 533.064 L 746.684 406.682 L 746.684 645.46 L 527.691 765.872 Z M 291.983 379.052 L 512 258.128 L 731.846 379.052 L 512 505.945 Z M 60.028 256.252 L 60.028 767.748 L 512 1023.411 L 963.972 767.748 L 963.972 256.252 L 512 0.589 Z M 140.018 274.075 L 496.309 72.308 L 496.309 229.219 L 274.246 351.507 L 140.019 274.075 Z M 115.629 296.078 L 245.933 371.293 L 245.933 642.476 L 115.629 717.691 Z M 883.981 274.075 L 749.754 351.507 L 527.691 229.389 L 527.691 72.478 L 883.982 274.075 Z M 908.371 717.691 L 778.067 642.476 L 778.067 371.293 L 908.371 296.078 Z M 893.192 744.979 L 527.691 951.692 L 527.691 799.897 L 763.74 670.104 L 893.192 744.978 Z M 130.979 744.978 L 260.431 669.934 L 496.309 799.897 L 496.309 951.692 L 130.979 744.979 Z"/><path opacity="0.3" d="M 496.309 765.872 L 277.316 645.289 L 277.316 406.682 L 496.309 533.064 L 496.309 765.872 Z M 527.691 765.872 L 746.684 645.46 L 746.684 406.682 L 527.691 533.064 L 527.691 765.872 Z M 291.983 379.052 L 512 258.128 L 731.846 379.052 L 512 505.945 L 291.983 379.052 Z"/></g>}
  };

  const Glyph = icons[type];

  return (
    <svg
      className={className}
      type={type}
      width={Glyph.width}
      height={Glyph.height}
      viewBox={'0 0 ' + Glyph.viewbox}
      style={{ ...style, ...{ fontSize: size + 'px' } }}
    >
      {Glyph.path}
    </svg>
  );
};

export { Icon };