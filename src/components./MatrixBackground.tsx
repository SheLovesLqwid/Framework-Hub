import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create falling characters
    const characters = '01';
    const fontSize = 18;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = [];
    
    for(let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Create canvas texture
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.15
    });
    
    const plane = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight);
    const mesh = new THREE.Mesh(plane, material);
    scene.add(mesh);
    
    camera.position.z = 500;

    // Animation
    function draw() {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      context.fillStyle = '#00ff41';
      context.font = `${fontSize}px monospace`;
      
      for(let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        context.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        
        drops[i]++;
      }
      
      texture.needsUpdate = true;
    }

    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      draw();
      renderer.render(scene, camera);
    }
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}