An Operational Amplifier, or op-amp for short, is fundamentally a voltage amplifying device designed to be used with external feedback components such as resistors and capacitors between its output and input terminals. These feedback components determine the resulting function or “operation” of the amplifier and by virtue of the different feedback configurations whether resistive, capacitive or both, the amplifier can perform a variety of different operations, giving rise to its name of “Operational Amplifier”.<br><br>
An Operational Amplifier is basically a three-terminal device which consists of two high impedance inputs. One of the inputs is called the Inverting Input, marked with a negative or “minus” sign, ( – ). The other input is called the Non-inverting Input, marked with a positive or “plus” sign ( + ).<br><br>
A third terminal represents the operational amplifiers output port which can both sink and source either a voltage or a current. In a linear operational amplifier, the output signal is the amplification factor, known as the amplifiers gain ( A ) multiplied by the value of the input signal .<br>

<h3>Common Mode Gain</h3>
Common-mode voltage gain refers to the amplification given to signals that appear on both inputs relative to the common (typically ground). … This means the output is unaffected by voltages that are common to both inputs. <br><br>
voltage applied to both input is common, it is referred as common mode voltage Vcm. The common mode voltage Vcm can be dc, ac and a combination of ac and dc.<br><br>

<center> Vi = (V1+V2)/2 </center><br>
Vocm = Acm X Vi
Acm = Vocm/Vi

<h3>Differential Mode Gain</h3>
Instead of applying superposition theorem with V1 and V2 separately, a better way is to first combined V1 and V2 in a different format, viz. (V1-V2). This is known as the differential mode input - Vd. <br><br>
Differential mode component : Vd = (V1-V2)<br><br>
Gain = VOUT/(V1-V2)<br><br>
Gain = VOUT/Vd  <br><br>

This gain is known as the Differential Gain (Ad) as it is based on the differential input alone

<h3>The common-mode rejection ratio (CMRR)</h3>
The common-mode rejection ratio (CMRR) is defined as the ratio of differential voltage gain Ad to the common-mode voltage gain ACM.<br>
i.e. CMRR = Ad/ ACM

<h3>Slew Rate</h3>
Slew rate is defined as the maximum rate of change of output voltage caused by a step input voltage and is expressed in volts per microseconds. <br>
<br>
Vs = VmSin wt<br><br>
Vo = Vm Sin wt<br>
dVo /dt = Vm w Cos wt<br>
SR  =  dVo/dt I maximum    V/µs<br>

But , Slew rate<br><br>

Put max value of Cos wt. in the equation <br><br>
SR = Vm w                (w=2pif)<br><br>
SR = Vm 2 pi f v/sec<br><br>
Slew rate indicates how rapidly the output of an op-amp can change in response to changes in the input frequency.

