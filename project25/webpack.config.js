// path — встроенный в Node.js модуль
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
//const { config } = require('process');
//const { HotModuleReplacementPlugin } = require('webpack');
//const { CopyWebpackPlugin } = require('copy-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';//режим разработка
const isProd = !isDev;//режим продакшн
/*const optimization = () => {
   const config= {
      splitChunks: {
         chunks: 'all',
      }
   }
   if (isProd) {
      config.minimizer = [
         new OptimizeCssAssetWebpackPlugin(),
         new TerserWebpackPlugin()
      ]
   }
   return config;
}
*/

module.exports = {
   
   mode:'development',//все собираем в редиме разработки, т.е. bundle.js теперь не минифицирован
  // Указываем путь до входной точки:
   entry:
      './script.js',
   //{
    //  main: './script.js',
   //   main2:'./script2.js'
  // },
   
  // Описываем, куда следует поместить результат работы:
  output: {
      // Путь до директории (важно использовать path.resolve):
     path: path.resolve(__dirname, 'dist'),
     // Имя файла со сборкой:
     filename: './bundle.js',
     //добавляем новые лоудеры
      
   },
   //optimization: optimization(),
   devServer: {
     port: 4200//порт нужно указывать для  "start": "webpack serve --mode development --open",
  },
   resolve: {
      extensions: ['.js', '.json', '.png'],//он нужен для того чтобы, если мы не пишем расширение у файла где-то в коде, то ищи то расширение которое указано в []
      //Например ['.js']
      alias: {
         '@models': path.resolve(__dirname, 'src/models'),
         '@': path.resolve(__dirname, 'json'),//и потом где-то в js можно будет указать import Post from '@models/Post'
      }
  },
  module: {
         rules: [
           /* {
               // Это правило будет применяться ко всем файлам,
               // имя которых подойдет под регулярное выражение:
               test: /\.s[ac]ss$/i,
               // Список лоадеров, которые применятся к файлу:
               
               
               
               use: [
                 
                  { loader: 'style-loader' },// импортирует CSS-файлы и внедряет стили в DOM.
                  {
                     loader: 'css-loader',// позволяет работать с @import и url() внутри CSS.
                     // Лоадеру можно передать параметры:
                     options: { modules: true }
                  }
               ]
            },*/
            {
              test: /\.css$/,
               use: [
                  {
                     loader: MiniCssExtractPlugin.loader,
                     options: {},
                     
                  },
                  "css-loader",
               ],
            }
         ]
   },
   plugins: [
      new HTMLWebpackPlugin({
         title: 'tystr',
         template: 'index.html',
         minify: {
            collapseWhitespace:true//минимизирует html
         }
      }),
      new CleanWebpackPlugin(),
     // new OptimizeCssAssetWebpackPlugin(),
     // new TerserWebpackPlugin(),
     // new HotModuleReplacementPlugin(),
     // new CopyWebpackPlugin()
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader']
         },
         {
           // test: /\.(png|jpg|svg|gif)$/,
           // type: 'asset/resource',
            
           test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            //type: 'asset/resource',
         loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        },
        
      
            //use:['file-loader']// что-то не так
         },
         {
           // test: /\.(ttf|woff|woff2|eot)$/,
            //type: 'asset/resource',
            //use:['file-loader']// что-то не так
            test: /.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'//шрифты не совсем работают
        },
         },
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         }
      ]
   }
}
//минимизируем CSS и JS
const length = module.exports.plugins.length;
if (isProd) {
   module.exports.plugins[length] = new OptimizeCssAssetWebpackPlugin();
   module.exports.plugins[length+1] = new TerserWebpackPlugin();
}