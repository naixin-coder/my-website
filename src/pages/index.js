/*
 * @Author: 刘林
 * @Date: 2021-11-11 21:12:21
 * @LastEditors: 刘林
 * @LastEditTime: 2021-11-16 16:54:22
 */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Lottie from 'react-lottie';
import * as animationData from './yoga.json'
import ReactECharts from 'echarts-for-react';
import useThemeContext from '@theme/hooks/useTheme';
// import TypingJs from 'typingjs-js';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();
  const [clientHeight, setclientHeight] = useState('100%');

  const getClientHeight = () => {
    if (window && document) {
      const height = document.body.clientHeight;
      setclientHeight(`${height - 60}px`)
    }
  }
  console.log(isDarkTheme);

  useEffect(() => {
    getClientHeight();
    // const typing1 = new TypingJs({
    //   selector: 'typingjs1',
    //   message: ' 曾经我的是一个我是一个JAVA程序员,面对的是冰冷的数据，世界毫无色彩,'
    // });
    // typing1.init();
    // setTimeout(() => {
    //   const typing2 = new TypingJs({
    //     selector: 'typingjs2',
    //     message: '现在的我想用前端的色彩绘画出五彩斑斓的天空!!'
    //   });
    //   typing2.init();
    // }, 4000)
  }, [])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  let colorList = [
    '#CF4645', '#B580B2', '#29008A', '#146A90', '#8956FF', '#70C9A8',
    '#bfbfbf', '#595959',
    '#40a9ff', '#1890ff',
    '#ffd666', '#ffc53d', '#ffc53d', '#ffc069', '#ffa940', '#fa8c16',
    '#eccbd9', '#ffadad', '#ff6392', '#ffc09f', '#ffcb77', '#ffe066', '#ffd53e', '#ffda3d', '#adf7b6', '#a0e8af', '#80ed99', '#07beb8', '#17c3b2', '#48cae4', '#97d2fb', '#83bcff', '#91e5f6', '#9381ff']
  let colorListLen = colorList.length
  let fontSizeList = [
    12, 12.5, 13, 13.5, 14, 14.5,
    15, 15.5, 16, 16.5, 17, 17.5,
    18, 18.5, 19, 19.5, 20, 20.5,
    21, 22, 23,
    24]
  let fontSizeListLen = fontSizeList.length
  let customLabel = {
    color: colorList[Math.floor(Math.random() * colorListLen)],
    fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
  }
  // let bgColor = isDarkTheme ? '#18191a' : '#ffffff'
  let bgColor = 'transparent';
  let canDraggable = false
  const option = {
    backgroundColor: bgColor,
    color: ['#37A2DA', '#32C5E9', '#67E0E3'],
    title: {
      show: false,
      text: '一天的时间流逝',
      x: 'center',
      y: 'bottom',
      // 文字的颜色,默认 #333。
      color: '#666',
      fontSize: 24
    },
    // toolbox: {
    //   show: true,
    //   feature: {
    //     restore: {},
    //   }
    // },
    itemStyle: {
      color: bgColor
    },
    series: [
      {
        type: 'graph',
        layout: 'force',
        force: {
          repulsion: 80,
          edgeLength: 10
        },
        roam: 'scale',
        // symbol: '',
        // symbolSize: 0,
        label: {
          show: true,
          color: 'auto',
          fontSize: 14
        },
        data: [
          {
            name: 'babel',
            value: 2,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'webpack',
            value: 12,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'CCS',
            value: 22,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'HTML',
            value: 42,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'React',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '前端工程',
            value: 62,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'JavaScript',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '哔哩哔哩',
            value: 72,
            draggable: canDraggable,
            itemStyle: {
              color: bgColor
            },
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '爬山',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '旅行',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '学英语',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '买衣服',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '理财',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'nginx',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'shell',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '早起',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '看书',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '敲代码',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: '写文章',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'cooking',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'Vite',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          },
          {
            name: 'Vue',
            value: 72,
            draggable: canDraggable,
            label: {
              color: colorList[Math.floor(Math.random() * colorListLen)],
              fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
            }
          }
        ]
      }
    ]
  }

  return (
    <Layout
      title={`${siteConfig.title}前端开发`}
      description="Description will go into a meta tag in <head />"
    >
      <main style={{ height: clientHeight, display: 'flex', justifyContent: 'space-between', padding: 20, }}>
        <div style={{ flex: 1, padding: '30px 20px' }}>
          <h1>前端修仙工程师</h1>
          <p className={styles["linear-text"]}>青松寒不落,碧海阔愈澄!!</p>
          <h2 style={{ marginTop: 30 }}>修仙时间：5年</h2>
          <article>
            <section id="typingjs1">
              曾经我的是一个我是一个JAVA程序员,面对的是冰冷的数据，世界毫无色彩,
            </section>
            <section id="typingjs2">
              现在的我想用前端的色彩绘画出五彩斑斓的天空!!
            </section>
          </article>
          <ReactECharts option={option} style={{ marginTop: 20 }} />
        </div>
        <Lottie options={defaultOptions}
          height={600}
          width={600}
          style={{ margin: 0 }}
        />
      </main>
    </Layout>
  );
}
