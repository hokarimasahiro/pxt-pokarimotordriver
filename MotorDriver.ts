/*
  motor driver block for pokari motor driver
*/

//% color=#006464 weight=20 icon="\uf1b9" block="Motor Driver"
namespace motordriver {

    let initFlag = 0;

    let I2C_ADDR=0x20

    function init() {
        if (initFlag == 0) {
            let buf = pins.createBuffer(2);
            buf[0] = 0x09;
            buf[1] = 0x55;
            pins.i2cWriteBuffer(I2C_ADDR, buf);
            initFlag = 1;
        }
    }

    /**
     * set motor speed for motor 1 and 2.
     * @param motor1 Moter1 Power in -127 to 127. eg:50
     * @param motor2 Motor2 Power in -127 to 127. eg:50
     */
    //% blockId="setMotor12" block="motor1 %motor1| motor2 %motor2"
    //% motor1.min=-127 motor1.max=127 motor2.min=-127 motor2.max=127
    function setMotor12(motor1: number, motor2: number): void {
        init();
        let buf = pins.createBuffer(3);
        buf[0] = 0x04;
        buf[1] = Math.constrain(motor1, -127, 127);
        buf[2] = Math.constrain(motor2, -127, 127);
        pins.i2cWriteBuffer(I2C_ADDR,buf);
    }

    /**
     * set motor speed for motor 3 and 4.
     * @param motor3 Moter3 Power in -127 to 127. eg:50
     * @param motor4 Motor4 Power in -127 to 127. eg:50
     */
    //% blockId="setMotor34" block="motor3 %motor3| motor4 %motor4"
    //% motor3.min=-127 motor3.max=127 motor4.min=-127 motor4.max=127
    function setMotor34(motor3: number, motor4: number): void {
        init();
        let buf = pins.createBuffer(3);
        buf[0] = 0x06;
        buf[1] = Math.constrain(motor3, -127, 127);
        buf[2] = Math.constrain(motor4, -127, 127);
        pins.i2cWriteBuffer(I2C_ADDR, buf);
    }
}
