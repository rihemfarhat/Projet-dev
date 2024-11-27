import React, { useRef, useEffect } from 'react';

const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Configure le canvas pour occuper tout l'écran
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 100;
        const maxDistance = 100;

        // Fonction pour créer une particule (un point)
        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2
            };
        }

        // Initialise les particules
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }

        // Fonction pour animer les particules
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#001f3f';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Boucle pour dessiner chaque particule
            particles.forEach((p, index) => {
                p.x += p.vx;
                p.y += p.vy;

                // Si une particule dépasse les bords, elle rebondit
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Dessine la particule
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = '#00aaff';
                ctx.fill();

                // Dessine les lignes entre les particules proches
                for (let j = index + 1; j < particleCount; j++) {
                    const p2 = particles[j];
                    const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 170, 255, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Redimensionne le canvas lors du changement de taille de la fenêtre
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);

        // Nettoyage à la fin
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, botton:0, zIndex: -1, borderRadius:50,marginTop:250,height: '450px', width:'100%', }} />;
};

export default NetworkBackground;
