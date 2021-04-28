import React, {useState} from 'react';
import ChatBot from 'react-native-chatbot';
import ChatbotCalculations from '../chatbotCalculations/chatbotCalculate';
import ChatbotElectricity from '../chatbotCalculations/chatbotElectricity';
import ChatbotFood from '../chatbotCalculations/chatbotFood';
import ChatbotStreaming from '../chatbotCalculations/chatbotStreaming';
import ChatbotTransport from '../chatbotCalculations/chatbotTransport';

const BotScreen = () => {
  return (
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Welcome to Chaitanya!',
          trigger: '2',
        },
        {
          id: '2',
          message:
            'Lets first calculate your carbon footprint due to transport -',
          trigger: '3',
        },
        {
          id: '3',
          message: 'Please select your most used mode of transport',
          trigger: 'transportType',
        },
        {
          id: 'transportType',
          options: [
            {value: 'car', label: 'Car', trigger: '5'},
            {value: 'bus', label: 'Bus', trigger: '5'},
            {value: 'train', label: 'Train', trigger: '5'},
            {value: 'plane', label: 'Airplane', trigger: '5'},
            {value: 'motorbike', label: 'Motorbike', trigger: '5'},
          ],
        },
        {
          id: '5',
          message: 'Please enter the distance travelled (in km)',
          trigger: 'kilometer',
        },
        {
          id: 'kilometer',
          user: true,
          inputAttributes: {keyboardType: 'numeric'},
          trigger: '7',
          validator: (value) => {
            if (isNaN(value)) {
              return 'value must be a number';
            }
            return true;
          },
        },
        {
          id: '7',
          message: 'Great! Check out your CF due to transport',
          trigger: 'transportCF',
        },
        {
          id: 'transportCF',
          component: <ChatbotTransport />,
          asMessage: true,
          trigger: '8',
        },
        {
          id: '8',
          message: 'Now lets calculate your carbon footprint due to food -',
          trigger: '9',
        },
        {
          id: '9',
          message: 'Please select the food item you eat the most',
          trigger: 'foodType',
        },
        {
          id: 'foodType',
          options: [
            {value: 'redMeat', label: 'Red Meat', trigger: '10'},
            {value: 'whiteMeat', label: 'White Meat', trigger: '10'},
            {value: 'fish', label: 'Fish', trigger: '10'},
            {value: 'coffee', label: 'Coffee', trigger: '10'},
            {value: 'chocolate', label: 'Chocolate', trigger: '10'},
          ],
        },
        {
          id: '10',
          message: 'Please enter the quantity (in grams)',
          trigger: 'foodQuantity',
        },
        {
          id: 'foodQuantity',
          user: true,
          inputAttributes: {keyboardType: 'numeric'},
          trigger: '11',
          validator: (value) => {
            if (isNaN(value)) {
              return 'value must be a number';
            }
            return true;
          },
        },
        {
          id: '11',
          message: 'Great! Check out your CF due to food',
          trigger: 'foodCF',
        },
        {
          id: 'foodCF',
          component: <ChatbotFood />,
          asMessage: true,
          trigger: '12',
        },
        {
          id: '12',
          message:
            'Now lets calculate your carbon footprint due to data streaming (internet usage) -',
          trigger: '13',
        },
        {
          id: '13',
          message: 'Please select your most preferred way of streaming',
          trigger: 'streamingType',
        },
        {
          id: 'streamingType',
          options: [
            {value: 'HDVideo', label: 'Video - HD', trigger: '14'},
            {
              value: 'fullHDVideo',
              label: 'Video - Full HD/1080p',
              trigger: '14',
            },
            {
              value: 'ultraHDVideo',
              label: 'Video - Ultra HD/4k',
              trigger: '14',
            },
            {value: 'audioMP3', label: 'Audio - MP3', trigger: '14'},
          ],
        },
        {
          id: '14',
          message: 'Please enter the average duration of usage (in hours)',
          trigger: 'streamingDuration',
        },
        {
          id: 'streamingDuration',
          user: true,
          inputAttributes: {keyboardType: 'numeric'},
          trigger: '15',
          validator: (value) => {
            if (isNaN(value)) {
              return 'value must be a number';
            }
            return true;
          },
        },
        {
          id: '15',
          message: 'Great! Check out your CF due to data usage',
          trigger: 'streamingCF',
        },
        {
          id: 'streamingCF',
          component: <ChatbotStreaming />,
          asMessage: true,
          trigger: '16',
        },
        {
          id: '16',
          message:
            'Now lets calculate your carbon footprint due to electricity usage -',
          trigger: '17',
        },
        {
          id: '17',
          message: 'Please enter your average usage (in kWh)',
          trigger: 'electricitykwh',
        },
        {
          id: 'electricitykwh',
          user: true,
          inputAttributes: {keyboardType: 'numeric'},
          trigger: '18',
          validator: (value) => {
            if (isNaN(value)) {
              return 'value must be a number';
            }
            return true;
          },
        },
        {
          id: '18',
          message: 'Great! Check out your CF due to data usage',
          trigger: 'electricityCF',
        },
        {
          id: 'electricityCF',
          component: <ChatbotElectricity />,
          asMessage: true,
          trigger: 'finalCF',
        },
        {
          id: 'finalCF',
          component: <ChatbotCalculations />,
          asMessage: true,
          trigger: 'end-message',
        },
        {
          id: 'end-message',
          message: 'Thanks! Your data was submitted successfully!',
          end: true,
        },
      ]}
    />
  );
};

export default BotScreen;
