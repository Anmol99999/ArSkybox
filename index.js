<script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
<script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.5.5/aframe/build/aframe-ar.js"></script></script>
<a-scene>   
  <a-sky src="#sky"></a-sky>
  <a-assets>
     <img id="reflection" src="https://raw.githubusercontent.com/mrdoob/three.js/r82/examples/textures/2294472375_24a3b8ef46_o.jpg">
    <img id="sky" src="https://raw.githubusercontent.com/mrdoob/three.js/r82/examples/textures/2294472375_24a3b8ef46_o.jpg"></a-assets>
<!--a-marker type='pattern' url='https://rawgit.com/germanviscuso/AR.js/master/data/data/patt.gafas'-->
 <a-marker preset='hiro'>
<a-torus-knot material="src:#reflection" position="0 0.75 0" scale="0.3 0.3 0.3" color="white" depth="1" height="1" width="1">
   <a-animation attribute="rotation"
              dur="5000"
              from= "0 0 0"
              to="0 360 0"
              easing= "linear"     
              repeat="indefinite">
   </a-animation>
  </a-torus-knot>
  </a-marker>
 <a-camera-static/>
</a-scene>
