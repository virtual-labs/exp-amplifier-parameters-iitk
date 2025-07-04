#### Please use the [reference](https://github.com/virtual-labs/ph3-exp-dev-process/blob/main/pedagogy/README.org) document to fill this template.  Follow the [link](https://github.com/virtual-labs/ph3-exp-dev-process/tree/main/sample/pedagogy) to view a sample pedagogy document.

## Pedagogy
<p align="center">


<br>
<b> Experiment : Measurement of Operational Amplifier Parameters : Common mode gain, Differential mode gain CMMR, Slew Rate	 <a name="top"></a> <br>
</p>

<b>Discipline | Electrical Engineering <b> 
:--|:--|
<b> Lab | Basic Electrical Engineering<b> 
<b> Experiment|  Measurement of Operational Amplifier Parameters : Common mode gain, Differential mode gain CMMR, Slew Rate  <b> 


<h4> [1. Focus Area](#LO)
<h4> [2. Learning Objectives ](#LO)
<h4> [3. Instructional Strategy](#IS)
<h4> [4. Task & Assessment Questions](#AQ)
<h4> [5. Simulator Interactions](#SI)
<hr>

<a name="LO"></a>
#### 1. Focus Area :
|Sr. No |	Focus Area	|
|:--    |:--| 
|1.| Experimentation|

#### 2. Learning Objectives and Cognitive Level


Sr. No |	Learning Objective	| Cognitive Level | Action Verb
:--|:--|:--|:-:
1.| The common mode gain is a measure of an operational amplifier's ability to amplify input signals that are common to both inputs. It is defined as the ratio of the output voltage to the common mode input voltage.  <br>   |  This is a measure of the amplifier's ability to amplify a signal applied to both its inputs in phase. It is the ratio of the output voltage to the common mode input voltage. The common mode gain is a ratio and thus a quantitative measure of the amplifier's performance.  | Common mode gain  
2.| The differential mode gain is a measure of an operational amplifier's ability to amplify the difference between the two input signals. It is defined as the ratio of the output voltage to the difference between the two input voltages.  <br>   |  This is a measure of the amplifier's ability to amplify a signal applied to both its inputs out of phase. It is the ratio of the output voltage to the differential input voltage. The differential mode gain is a ratio and thus a quantitative measure of the amplifier's performance.  | Differential mode gain  
3.| CMRR is a measure of how well an operational amplifier can reject common mode signals. It is defined as the ratio of the differential mode gain to the common mode gain.  <br>   |  This is a measure of how well an operational amplifier can reject a signal that is applied to both its inputs in phase. It is the ratio of the differential mode gain to the common mode gain. CMMR is a ratio and thus a quantitative measure of the amplifier's performance.| Common mode rejection ratio (CMRR)
4.| Slew rate is a measure of how quickly an operational amplifier can change its output voltage in response to a step input. It is defined as the maximum rate of change of the output voltage with respect to time.  <br>   | This is a measure of how fast the amplifier can respond to changes in its input voltage. It is defined as the maximum rate of change of the output voltage with respect to time, and is typically expressed in volts per microsecond (V/μs). Slew rate is a quantitative measure of the amplifier's performance, and is important in applications where the input signal is changing rapidly, such as in audio or video circuits.   | Slew rate
5.| Various techniques are used to measure these operational amplifier parameters, including using test circuits and equipment such as oscilloscopes, signal generators, and multimeters. These measurements are important for evaluating and optimizing the performance of an operational amplifier circuit.  <br>   |  the cognitive level of measurement of these operational amplifier parameters is considered to be advanced.  | Testing and measurement techniques

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="IS"></a>
#### 3. Instructional Strategy
###### Name of Instructional Strategy  :    <u> 
There are several instructional strategies that can be used to teach the measurement of operational amplifier parameters such as common mode gain, differential mode gain, common mode rejection ratio (CMMR), and slew rate. Some of the effective strategies include:<br>
1. Theoretical Approach: Theoretical approach involves introducing students to the underlying principles and equations that define these parameters. Students learn about the concepts of input and output voltages, signal amplification, and frequency response. This approach can help students understand the basic working of operational amplifiers and the importance of these parameters in the amplifier's performance.<br>
2. Experimental Approach: An experimental approach involves providing hands-on experience to students with various laboratory experiments that demonstrate the measurement of different operational amplifier parameters. This approach can help students understand how to measure these parameters using different instruments, and also learn how to troubleshoot different types of operational amplifier circuits.<br>
3. Simulation Approach: The simulation approach involves using computer-based simulations to teach students how to measure different operational amplifier parameters. This approach can provide students with a virtual laboratory where they can perform various experiments and analyze the results.<br>
4. Problem-based Approach: The problem-based approach involves providing students with a series of problems or case studies that require them to apply their knowledge of operational amplifier parameters. This approach can help students develop critical thinking and problem-solving skills and can also help them relate theoretical concepts to practical applications.<br>
5. Collaborative Learning Approach: Collaborative learning approach involves group work where students work in small groups to solve problems, design and analyze circuits, and measure operational amplifier parameters. This approach can help students learn from each other, share ideas and experiences, and develop communication and teamwork skills.<br><br>
Overall, using a combination of these instructional strategies can help students develop a deep understanding of the measurement of operational amplifier parameters and their importance in electronic circuit design.
    
###### Assessment Method:   
There are various methods for measuring the operational amplifier (op-amp) parameters such as common mode gain, differential mode gain (CMMR), and slew rate. The following are some of the common methods used for measurement:<br>

<h4>Common Mode Gain:</h4>
The common mode gain (CMG) of an op-amp is the ratio of the output voltage to the input voltage when the same voltage is applied to both inputs. The following are the steps involved in measuring the CMG of an op-amp:<br>
Step 1: Connect the op-amp in the non-inverting configuration with a unity gain feedback.<br>
Step 2: Apply a common-mode input signal to both the inputs of the op-amp.<br>
Step 3: Measure the output voltage of the op-amp.<br>
Step 4: Calculate the common-mode gain using the formula: CMG = Vout/Vin<br>
    
<h4>Differential Mode Gain (CMMR):</h4>
The differential mode gain (DMG) of an op-amp is the ratio of the output voltage to the differential input voltage. The following are the steps involved in measuring the DMG of an op-amp:<br>
Step 1: Connect the op-amp in the non-inverting configuration with a unity gain feedback.<br>
Step 2: Apply a differential input signal to the inputs of the op-amp.<br>
Step 3: Measure the output voltage of the op-amp.<br>
Step 4: Calculate the differential mode gain using the formula: DMG = Vout/Vin<br>
Step 5: Calculate the common-mode rejection ratio (CMRR) using the formula: CMRR = 20 log(DMG/CMG)<br><br>
    
<h4>Slew Rate:</h4>
The slew rate is the maximum rate of change of the output voltage of an op-amp. The following are the steps involved in measuring the slew rate of an op-amp:<br>
Step 1: Connect the op-amp in the non-inverting configuration with a unity gain feedback.<br>
Step 2: Apply a square wave input signal to the op-amp.<br>
Step 3: Measure the time taken for the output voltage to reach its maximum value.<br>
Step 4: Calculate the slew rate using the formula: SR = 2πfVp/Δt, where f is the frequency of the input signal, Vp is the peak output voltage, and Δt is the time taken for the output voltage to change from 10% to 90% of the peak value.<br>
In conclusion, the methods for measuring the op-amp parameters discussed above are simple and straightforward. However, it is important to ensure that the test conditions are within the specified limits of the op-amp to obtain accurate results.


    

<u> <b>Description: </b>    </u>
<br>
    

<br/>
<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="AQ"></a>
#### 4. Task & Assessment Questions:

  
<br>

Sr. No |	Learning Objective	| Task to be performed by <br> the student  in the simulator | Assessment Questions as per LO & Task
:--|:--|:--|:-:
1.|   <br>  |   <br>  | <br> 
2.|   <br>  |   <br>  | <br> 


<div align="right">
    <b><a href="#top">↥ back to top</a></b>
</div>
<br/>
<hr>

<a name="SI"></a>

#### 4. Simulator Interactions:
<br>

Sr.No | What Students will do? |	What Simulator will do?	| Purpose of the task
:--|:--|:--|:--:
1.|  <br> | <br> |   
2.|  <br> | <br> |
