// Declare Constants
const int sensorPin = 4;           // PIR Sensor is attached to digital pin 2
const int ledPin = 13;             // Built-in LED
const int ledBlinkTime = 500;      // Blink one for half a second while calibrating

// Wait for the seonsor to calibrate (20 - 60 seconds according to datasheet)
// 60 Seconds in milliseconds
const unsigned int calibrationTime = 60000;

void setup() {
  Serial.begin(115200);
  
  pinMode(sensorPin, INPUT);
  pinMode(ledPin, OUTPUT);
  
  // We need to wait one minute for the sensor to calibrate
  // Get out of view of the sensor for this duration!
  
  // Blink the LED while calibrating
  for (unsigned int i=0; i<calibrationTime; i+=ledBlinkTime*2) {
    digitalWrite(ledPin, HIGH);
    delay(ledBlinkTime);
    digitalWrite(ledPin, LOW);
    delay(ledBlinkTime);
  }
}

void loop() {
  // Constantly check the state of pin 2
  // If it is HIGH the sensor is detecting motion
  if (digitalRead(sensorPin) == HIGH) {
   digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(500);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(100);  
  } else {
    // Turn the LED off
    digitalWrite(ledPin, LOW);
  }
}



