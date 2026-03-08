// KidWind QuizBowl Question Database — Part 1: Aerodynamics, Angle of Attack, Reynolds Number, Electrical
export const aerodynamicsQuestions = [
    {
        id: 'aero1', category: 'Aerodynamics', difficulty: 1, type: 'flashcard',
        question: 'What is an airfoil?', answer: 'A shape designed to produce lift when air flows over it',
        explanation: 'An airfoil has a curved upper surface and flatter lower surface. This shape is used in airplane wings and wind turbine blades to create lift from air flowing over them.'
    },
    {
        id: 'aero2', category: 'Aerodynamics', difficulty: 1, type: 'multiple-choice',
        question: 'What force makes wind turbine blades spin?', choices: ['Gravity', 'Lift', 'Friction', 'Weight'],
        answer: 'Lift', explanation: 'Lift is generated when air flows faster over the curved top of the blade (lower pressure) than the flat bottom (higher pressure). This pressure difference creates the force that spins the blades.'
    },
    {
        id: 'aero3', category: 'Aerodynamics', difficulty: 1, type: 'true-false',
        question: 'Wind turbine blades use the same aerodynamic principles as airplane wings.',
        answer: true, explanation: 'Both use airfoil shapes to generate lift. The difference is that airplane wings create lift to fly upward, while turbine blades convert lift into rotational motion.'
    },
    {
        id: 'aero4', category: 'Aerodynamics', difficulty: 2, type: 'multiple-choice',
        question: 'According to Bernoulli\'s principle, what happens when air speeds up?',
        choices: ['Pressure increases', 'Pressure decreases', 'Pressure stays the same', 'Temperature increases'],
        answer: 'Pressure decreases', explanation: 'Bernoulli\'s principle states that faster-moving air has lower pressure. On an airfoil, air moves faster over the curved top surface, creating lower pressure above and higher pressure below — this generates lift.'
    },
    {
        id: 'aero5', category: 'Aerodynamics', difficulty: 2, type: 'flashcard',
        question: 'What is the difference between lift and drag?',
        answer: 'Lift is perpendicular to airflow (useful); drag is parallel to airflow (resistance)',
        explanation: 'Lift pushes the blade and makes it rotate — this is what we want. Drag acts against the motion and slows the blade down. Good blade design maximizes lift and minimizes drag.'
    },
    {
        id: 'aero6', category: 'Aerodynamics', difficulty: 1, type: 'multiple-choice',
        question: 'Why is the top of an airfoil curved more than the bottom?',
        choices: ['To look better', 'To make air travel faster over the top', 'To add weight', 'To reduce the blade size'],
        answer: 'To make air travel faster over the top', explanation: 'The curved top forces air to travel a longer path, making it speed up. This creates lower pressure on top and higher pressure on the bottom, generating lift.'
    },
    {
        id: 'aero7', category: 'Aerodynamics', difficulty: 2, type: 'flashcard',
        question: 'What is laminar flow vs. turbulent flow?',
        answer: 'Laminar = smooth, orderly flow; Turbulent = chaotic, swirling flow',
        explanation: 'Laminar flow moves in smooth parallel layers, like honey pouring slowly. Turbulent flow is chaotic with eddies and swirls, like rapids in a river. Turbine blades work best with mostly laminar flow.'
    },
    {
        id: 'aero8', category: 'Aerodynamics', difficulty: 3, type: 'multiple-choice',
        question: 'What happens to a wind turbine blade when it "stalls"?',
        choices: ['It speeds up', 'It generates maximum lift', 'Airflow separates and lift drops dramatically', 'It breaks off'],
        answer: 'Airflow separates and lift drops dramatically', explanation: 'Stall occurs when the angle of attack gets too large. The smooth airflow over the blade separates, creating turbulence. This dramatically reduces lift and increases drag, slowing the blade.'
    },
    {
        id: 'aero9', category: 'Aerodynamics', difficulty: 3, type: 'flashcard',
        question: 'What is a lift-to-drag ratio and why does it matter?',
        answer: 'The ratio of lift force to drag force — higher ratios mean more efficient blades',
        explanation: 'A high lift-to-drag ratio means the blade generates a lot of useful lift while producing minimal drag. Modern wind turbine blades aim for ratios of 100:1 or higher at optimal conditions.'
    },
    {
        id: 'aero10', category: 'Aerodynamics', difficulty: 1, type: 'true-false',
        question: 'Drag is a useful force that helps wind turbine blades spin faster.',
        answer: false, explanation: 'Drag is actually resistance that works against blade motion. Good blade design minimizes drag while maximizing lift. Some primitive windmills used drag, but modern turbines rely on lift for much greater efficiency.'
    },
    {
        id: 'aero11', category: 'Aerodynamics', difficulty: 2, type: 'multiple-choice',
        question: 'Wind turbine blades are twisted along their length. Why?',
        choices: ['For decoration', 'To optimize the angle of attack at each point along the blade', 'To make them stronger', 'To reduce manufacturing cost'],
        answer: 'To optimize the angle of attack at each point along the blade', explanation: 'The tip of a blade moves much faster than the root. Twisting ensures each part of the blade has the best angle relative to the incoming wind, maximizing efficiency along the entire blade.'
    },
    {
        id: 'aero12', category: 'Aerodynamics', difficulty: 3, type: 'fill-blank',
        question: 'The principle that explains how faster-moving air creates lower pressure is called _____ principle.',
        answer: 'Bernoulli', explanation: 'Daniel Bernoulli discovered that in a flowing fluid, an increase in velocity occurs simultaneously with a decrease in pressure. This is fundamental to understanding lift on airfoils.'
    },
    // Additional aerodynamics
    {
        id: 'aero13', category: 'Aerodynamics', difficulty: 1, type: 'flashcard',
        question: 'What are the two main types of forces acting on a wind turbine blade?',
        answer: 'Lift and Drag',
        explanation: 'Lift acts perpendicular to the wind direction and makes the blade rotate. Drag acts parallel to the wind and resists motion. Engineers design blades to maximize lift and minimize drag.'
    },
    {
        id: 'aero14', category: 'Aerodynamics', difficulty: 2, type: 'true-false',
        question: 'A flat plate can generate as much lift as a properly shaped airfoil.',
        answer: false, explanation: 'A properly shaped airfoil generates significantly more lift and less drag than a flat plate. The curved shape is specifically designed to optimize the pressure difference between the top and bottom surfaces.'
    },
    // New aerodynamics questions
    {
        id: 'aero15', category: 'Aerodynamics', difficulty: 1, type: 'multiple-choice',
        question: 'Which surface of an airfoil has lower air pressure when generating lift?',
        choices: ['The bottom surface', 'The top surface', 'Both surfaces equally', 'Neither surface'],
        answer: 'The top surface', explanation: 'Air moves faster over the curved top surface, creating lower pressure (Bernoulli\'s principle). The higher pressure on the bottom pushes the blade upward, generating lift.'
    },
    {
        id: 'aero16', category: 'Aerodynamics', difficulty: 2, type: 'flashcard',
        question: 'What is a boundary layer in aerodynamics?',
        answer: 'The thin layer of air immediately touching the blade surface where friction slows the flow',
        explanation: 'Right at the blade surface, air velocity is zero due to friction. This thin layer where the air speeds up from zero to the free-stream velocity is the boundary layer. It affects drag and can cause flow separation.'
    },
    {
        id: 'aero17', category: 'Aerodynamics', difficulty: 3, type: 'flashcard',
        question: 'What is the wake effect in a wind farm?',
        answer: 'Downwind turbines receive slower, more turbulent air from upstream turbines, reducing their power output',
        explanation: 'A turbine extracts energy from the wind, leaving a "wake" of slower, more turbulent air behind it. Turbines placed in this wake can produce 10-40% less power. Proper spacing (5-10 rotor diameters) minimizes this.'
    },
    {
        id: 'aero18', category: 'Aerodynamics', difficulty: 3, type: 'multiple-choice',
        question: 'What is the primary reason modern wind turbine blades are so long?',
        choices: ['To look impressive', 'Swept area increases with the square of blade length, capturing much more energy', 'Longer blades are cheaper to make', 'They need to reach faster wind higher up'],
        answer: 'Swept area increases with the square of blade length, capturing much more energy',
        explanation: 'Power is proportional to swept area (A = πr²). Doubling blade length quadruples the swept area and roughly quadruples the energy captured. This is why modern blades can exceed 100 meters.'
    },
    {
        id: 'aero19', category: 'Aerodynamics', difficulty: 1, type: 'fill-blank',
        question: 'The two main aerodynamic forces acting on a wind turbine blade are lift and _____.',
        answer: 'drag', explanation: 'Lift is the useful force perpendicular to the airflow that makes blades spin. Drag is the resistance force parallel to the airflow that opposes motion. Good blade design maximizes lift and minimizes drag.'
    },
    {
        id: 'aero20', category: 'Aerodynamics', difficulty: 2, type: 'multiple-choice',
        question: 'What happens to wind power if the wind speed doubles?',
        choices: ['Power doubles', 'Power quadruples', 'Power increases 8 times', 'Power stays the same'],
        answer: 'Power increases 8 times', explanation: 'Wind power is proportional to the cube of wind speed (P ∝ v³). So doubling the wind speed means 2³ = 8 times more power available. This is why even small increases in wind speed matter a lot.'
    },
    {
        id: 'aero21', category: 'Aerodynamics', difficulty: 3, type: 'true-false',
        question: 'Wind power is proportional to the square of wind speed.',
        answer: false, explanation: 'Wind power is proportional to the CUBE (third power) of wind speed: P = ½ρAv³. If wind speed doubles, available power increases by 2³ = 8 times. This cubic relationship is one of the most important concepts in wind energy.'
    },
    {
        id: 'aero22', category: 'Aerodynamics', difficulty: 3, type: 'formula',
        question: 'If wind speed increases from 5 m/s to 10 m/s, by what factor does the available wind power increase?',
        answer: '8', formula: 'Factor = (v₂/v₁)³ = (10/5)³ = 2³', units: 'times',
        explanation: 'Wind power scales with the cube of velocity. (10/5)³ = 2³ = 8. The wind power increases by a factor of 8 when wind speed doubles.'
    },
];

export const angleOfAttackQuestions = [
    {
        id: 'aoa1', category: 'Angle of Attack', difficulty: 1, type: 'flashcard',
        question: 'What is the angle of attack?',
        answer: 'The angle between the blade (chord line) and the direction of incoming wind',
        explanation: 'Think of holding your hand out a car window — if you tilt it slightly the wind pushes it up (lift). The angle of your hand relative to the airflow is the angle of attack.'
    },
    {
        id: 'aoa2', category: 'Angle of Attack', difficulty: 1, type: 'multiple-choice',
        question: 'What happens if the angle of attack on a wind turbine blade is too large?',
        choices: ['More power is generated', 'The blade stalls and loses lift', 'Nothing changes', 'The blade speeds up'],
        answer: 'The blade stalls and loses lift', explanation: 'When the angle of attack exceeds the critical angle (typically 15-20°), airflow separates from the blade surface. This is called a stall — lift drops dramatically and drag increases.'
    },
    {
        id: 'aoa3', category: 'Angle of Attack', difficulty: 2, type: 'flashcard',
        question: 'What is the "critical angle of attack"?',
        answer: 'The maximum angle of attack before the blade stalls (~15-20° for most airfoils)',
        explanation: 'Beyond this angle, airflow can no longer follow the upper surface of the airfoil smoothly. The flow separates, creating turbulence, and lift drops suddenly while drag increases.'
    },
    {
        id: 'aoa4', category: 'Angle of Attack', difficulty: 1, type: 'true-false',
        question: 'An angle of attack of 0° produces the maximum lift.',
        answer: false, explanation: 'Maximum lift occurs at a moderate angle of attack (around 10-15°). At 0°, there is some lift due to the airfoil shape, but a small positive angle increases lift significantly.'
    },
    {
        id: 'aoa5', category: 'Angle of Attack', difficulty: 2, type: 'multiple-choice',
        question: 'Why are wind turbine blades twisted along their length?',
        choices: ['Because of manufacturing errors', 'To maintain optimal angle of attack from root to tip', 'To look cooler', 'To reduce weight'],
        answer: 'To maintain optimal angle of attack from root to tip', explanation: 'The tip moves much faster than the root, so it encounters wind at a different effective angle. Twisting the blade ensures each section maintains the best angle of attack for maximum efficiency.'
    },
    {
        id: 'aoa6', category: 'Angle of Attack', difficulty: 3, type: 'fill-blank',
        question: 'The angle of attack is measured between the chord line and the _____ wind direction.',
        answer: 'relative', explanation: 'The relative wind is the combination of the actual wind and the wind created by the blade\'s own motion. This is different from the true wind direction and changes along the blade length.'
    },
    {
        id: 'aoa7', category: 'Angle of Attack', difficulty: 2, type: 'flashcard',
        question: 'What is blade pitch control?',
        answer: 'A mechanism that adjusts the angle of the entire blade to optimize performance or protect in high winds',
        explanation: 'Pitch control rotates the blade around its long axis. In normal winds, it optimizes the angle of attack for maximum power. In dangerous high winds, it "feathers" the blades (turns them parallel to the wind) to prevent damage.'
    },
    {
        id: 'aoa8', category: 'Angle of Attack', difficulty: 3, type: 'multiple-choice',
        question: 'A wind turbine is "feathered." What does this mean?',
        choices: ['Blades are covered in feathers', 'Blades are turned parallel to wind to stop rotation', 'Blades are spinning at maximum speed', 'The turbine is broken'],
        answer: 'Blades are turned parallel to wind to stop rotation', explanation: 'Feathering adjusts the blade pitch so the angle of attack is nearly 0°, producing no lift. This is a safety measure used in extremely high winds to prevent damage to the turbine.'
    },
    {
        id: 'aoa9', category: 'Angle of Attack', difficulty: 1, type: 'flashcard',
        question: 'What is the chord line of an airfoil?',
        answer: 'An imaginary straight line from the leading edge to the trailing edge of the airfoil',
        explanation: 'The chord line is used as a reference to measure the angle of attack. It runs from the front (leading edge) to the back (trailing edge) of the blade cross-section.'
    },
    // New angle of attack questions
    {
        id: 'aoa10', category: 'Angle of Attack', difficulty: 2, type: 'true-false',
        question: 'The angle of attack stays the same along the entire length of a non-twisted blade.',
        answer: false, explanation: 'Even on a non-twisted blade, the effective angle of attack varies from root to tip because the blade tip moves faster. This is exactly why blades are twisted — to compensate and maintain optimal angles everywhere.'
    },
    {
        id: 'aoa11', category: 'Angle of Attack', difficulty: 1, type: 'multiple-choice',
        question: 'What is the leading edge of an airfoil?',
        choices: ['The back edge where air leaves', 'The front edge where air first hits the blade', 'The top surface', 'The bottom surface'],
        answer: 'The front edge where air first hits the blade', explanation: 'The leading edge is the front of the airfoil that first meets the incoming air. The back where air departs is the trailing edge. Together they define the chord line.'
    },
    {
        id: 'aoa12', category: 'Angle of Attack', difficulty: 3, type: 'flashcard',
        question: 'What is "stall regulation" in wind turbines?',
        answer: 'A passive control method where blade shape is designed to stall automatically in high winds, limiting power',
        explanation: 'Stall-regulated turbines have fixed blades designed to gradually stall as wind speeds increase beyond rated speed. This naturally limits power output without active pitch control mechanisms.'
    },
    {
        id: 'aoa13', category: 'Angle of Attack', difficulty: 3, type: 'multiple-choice',
        question: 'At the blade root, the effective angle of attack is typically:',
        choices: ['Smaller than at the tip', 'Larger than at the tip', 'The same as the tip', 'Zero degrees'],
        answer: 'Larger than at the tip', explanation: 'The root moves slowly (small circle), so the relative wind comes more from the front. The tip moves fast (large circle), so relative wind comes more from the side. Blades are twisted with more angle at the root to compensate.'
    },
    {
        id: 'aoa14', category: 'Angle of Attack', difficulty: 2, type: 'flashcard',
        question: 'What is the trailing edge of an airfoil?',
        answer: 'The rear edge of the blade where the upper and lower airflow rejoin',
        explanation: 'The trailing edge is the thin, sharp back edge of the airfoil. Air flowing over the top and bottom surfaces meets again here. A sharp trailing edge helps reduce drag.'
    },
    {
        id: 'aoa15', category: 'Angle of Attack', difficulty: 3, type: 'true-false',
        question: 'A negative angle of attack means the blade will always produce negative lift (downward force).',
        answer: false, explanation: 'Cambered (curved) airfoils can still produce positive lift at slightly negative angles of attack because their curved shape inherently creates a pressure difference. Only at more negative angles does lift become negative.'
    },
    {
        id: 'aoa16', category: 'Angle of Attack', difficulty: 3, type: 'flashcard',
        question: 'What is the difference between pitch-regulated and stall-regulated turbines?',
        answer: 'Pitch-regulated actively rotates blades to control power; stall-regulated uses fixed blade shape that passively stalls in high winds',
        explanation: 'Pitch regulation gives more precise control and is used in most modern large turbines. Stall regulation is simpler and cheaper but less precise. Some turbines use "active stall" which combines both approaches.'
    },
];

export const reynoldsNumberQuestions = [
    {
        id: 're1', category: 'Reynolds Number', difficulty: 1, type: 'flashcard',
        question: 'What does the Reynolds number tell us?',
        answer: 'Whether fluid flow will be smooth (laminar) or chaotic (turbulent)',
        explanation: 'The Reynolds number is a dimensionless number that compares inertial forces to viscous forces. Low Re = smooth laminar flow; High Re = chaotic turbulent flow.'
    },
    {
        id: 're2', category: 'Reynolds Number', difficulty: 2, type: 'multiple-choice',
        question: 'What is the formula for Reynolds number?',
        choices: ['Re = ρvL/μ', 'Re = P×I×V', 'Re = F/A', 'Re = mv²/2'],
        answer: 'Re = ρvL/μ', explanation: 'Re = (density × velocity × length) / dynamic viscosity. ρ is air density, v is velocity, L is a characteristic length (like chord length), and μ is dynamic viscosity of the fluid.'
    },
    {
        id: 're3', category: 'Reynolds Number', difficulty: 1, type: 'true-false',
        question: 'A high Reynolds number means the flow is smooth and orderly.',
        answer: false, explanation: 'A HIGH Reynolds number means turbulent (chaotic) flow. A LOW Reynolds number means laminar (smooth, orderly) flow. The transition typically happens around Re = 500,000 for airfoils.'
    },
    {
        id: 're4', category: 'Reynolds Number', difficulty: 2, type: 'flashcard',
        question: 'What two types of forces does the Reynolds number compare?',
        answer: 'Inertial forces (momentum) vs. Viscous forces (friction/stickiness)',
        explanation: 'Inertial forces want the fluid to keep moving in its current direction. Viscous forces try to slow it down and keep it orderly. When inertial forces dominate (high Re), flow becomes turbulent.'
    },
    {
        id: 're5', category: 'Reynolds Number', difficulty: 3, type: 'formula',
        question: 'Calculate the Reynolds number: air density = 1.2 kg/m³, velocity = 10 m/s, blade chord = 0.5 m, dynamic viscosity = 1.8 × 10⁻⁵ Pa·s',
        answer: '333333', formula: 'Re = ρvL/μ = (1.2 × 10 × 0.5) / (1.8 × 10⁻⁵)',
        units: '(dimensionless)', explanation: 'Re = (1.2 × 10 × 0.5) / 0.000018 = 6 / 0.000018 = 333,333. This is a moderately high Reynolds number, suggesting the flow is turbulent.'
    },
    {
        id: 're6', category: 'Reynolds Number', difficulty: 2, type: 'multiple-choice',
        question: 'Why does the Reynolds number change along the length of a wind turbine blade?',
        choices: ['It doesn\'t change', 'The velocity changes — the tip moves faster than the root', 'The air density changes', 'The viscosity changes'],
        answer: 'The velocity changes — the tip moves faster than the root', explanation: 'The tip of a blade moves much faster than the root (it covers a larger circle in the same time). Since velocity is in the Reynolds number formula, Re is higher at the tip than at the root.'
    },
    {
        id: 're7', category: 'Reynolds Number', difficulty: 1, type: 'multiple-choice',
        question: 'Which analogy best describes laminar flow?',
        choices: ['A waterfall crashing on rocks', 'Honey pouring slowly from a spoon', 'Waves crashing on a beach', 'A tornado'],
        answer: 'Honey pouring slowly from a spoon', explanation: 'Laminar flow is smooth, orderly, and predictable — like honey pouring in a smooth, continuous stream. Each layer of fluid slides smoothly past the next.'
    },
    {
        id: 're8', category: 'Reynolds Number', difficulty: 3, type: 'true-false',
        question: 'KidWind model turbine blades operate at the same Reynolds numbers as full-scale wind turbines.',
        answer: false, explanation: 'KidWind models operate at much LOWER Reynolds numbers than full-scale turbines because they are smaller and spin slower. This means airfoils behave differently at model scale, which is an important design consideration.'
    },
    {
        id: 're9', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'Why is it challenging to design small-scale model turbine blades?',
        answer: 'At low Reynolds numbers (small scale), airfoils produce less lift and more drag relative to full-scale',
        explanation: 'Small models have low Reynolds numbers where viscous forces are more dominant. This means the smooth airflow separates more easily, creating more drag. Blade designs that work great at full scale may perform poorly at model scale.'
    },
    {
        id: 're10', category: 'Reynolds Number', difficulty: 2, type: 'fill-blank',
        question: 'The Reynolds number is a _____ number, meaning it has no units.',
        answer: 'dimensionless', explanation: 'Because Re is a ratio of forces (inertial/viscous), all the units cancel out. It\'s just a pure number that characterizes the flow regime.'
    },
    // New Reynolds Number questions — especially more advanced (difficulty 3) for matching
    {
        id: 're11', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'What is the transition Reynolds number for airfoils?',
        answer: 'Approximately 500,000 — below this flow tends to be laminar, above it becomes turbulent',
        explanation: 'For airfoils, the transition from laminar to turbulent flow typically occurs around Re = 500,000. KidWind models operate well below this (~50,000-100,000), meaning mostly laminar flow with easy separation.'
    },
    {
        id: 're12', category: 'Reynolds Number', difficulty: 3, type: 'multiple-choice',
        question: 'A full-scale wind turbine blade tip has Re ≈ 6,000,000. A KidWind model has Re ≈ 50,000. What does this difference imply?',
        choices: ['The KidWind model is more efficient', 'The full-scale blade has much more turbulent flow and better-attached airflow', 'They perform identically', 'The KidWind model generates more lift per unit area'],
        answer: 'The full-scale blade has much more turbulent flow and better-attached airflow',
        explanation: 'At high Re, the turbulent boundary layer stays attached to the blade better, which actually helps maintain lift. At the low Re of KidWind models, the laminar boundary layer separates easily, causing more drag and less lift.'
    },
    {
        id: 're13', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'What is a laminar separation bubble?',
        answer: 'A region where laminar flow separates from the surface, transitions to turbulent, then reattaches',
        explanation: 'At low Reynolds numbers (like KidWind models), the laminar boundary layer can separate due to an adverse pressure gradient. The separated flow transitions to turbulent and may reattach, forming a "bubble" that increases drag.'
    },
    {
        id: 're14', category: 'Reynolds Number', difficulty: 1, type: 'flashcard',
        question: 'What does "ρ" (rho) represent in the Reynolds number formula?',
        answer: 'The density of the fluid (for air, approximately 1.2 kg/m³ at sea level)',
        explanation: 'Air density (ρ) is how much mass is in a given volume of air. Denser air has higher Reynolds numbers. Air density decreases with altitude, which is why high-altitude wind turbines face different Re conditions.'
    },
    {
        id: 're15', category: 'Reynolds Number', difficulty: 2, type: 'true-false',
        question: 'Cold air produces a higher Reynolds number than warm air at the same speed.',
        answer: true, explanation: 'Cold air is denser (higher ρ) and has lower viscosity (lower μ). Both of these changes increase Re = ρvL/μ. So cold air produces higher Reynolds numbers and more turbulent flow.'
    },
    {
        id: 're16', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'Why do some KidWind competitors add "turbulators" (like tape strips) to their blades?',
        answer: 'Turbulators trip the boundary layer from laminar to turbulent, which can help it stay attached and reduce drag at low Re',
        explanation: 'At low Reynolds numbers, the laminar boundary layer separates easily. A small strip of tape or rough surface intentionally triggers turbulent flow, which paradoxically sticks to the blade better, reducing the separation bubble and overall drag.'
    },
    {
        id: 're17', category: 'Reynolds Number', difficulty: 3, type: 'multiple-choice',
        question: 'Which has a higher Reynolds number?',
        choices: ['A hummingbird\'s wing in flight', 'A Boeing 747 wing at cruising speed', 'Both are the same', 'Neither has a Reynolds number'],
        answer: 'A Boeing 747 wing at cruising speed',
        explanation: 'The 747 has massive chord length (~10m) and high speed (~250 m/s), giving Re in the hundreds of millions. A hummingbird wing is tiny (~2cm) and slow, giving Re around 10,000. This huge difference means very different aerodynamic behavior.'
    },
    {
        id: 're18', category: 'Reynolds Number', difficulty: 2, type: 'multiple-choice',
        question: 'What is the "characteristic length" (L) used for Reynolds number in wind turbine blades?',
        choices: ['The blade length', 'The tower height', 'The chord length (width) of the blade', 'The turbine diameter'],
        answer: 'The chord length (width) of the blade', explanation: 'For airfoils, the characteristic length L is the chord length — the distance from leading edge to trailing edge. Since chord length varies along the blade, Re also varies along the blade.'
    },
    {
        id: 're19', category: 'Reynolds Number', difficulty: 3, type: 'formula',
        question: 'A KidWind blade has chord = 0.03 m, tip speed = 15 m/s, air density = 1.2 kg/m³, viscosity = 1.8 × 10⁻⁵ Pa·s. What is the Reynolds number at the tip?',
        answer: '30000', formula: 'Re = ρvL/μ = (1.2 × 15 × 0.03) / (1.8 × 10⁻⁵)',
        units: '(dimensionless)', explanation: 'Re = (1.2 × 15 × 0.03) / 0.000018 = 0.54 / 0.000018 = 30,000. This is a very low Reynolds number, typical of KidWind models, where viscous effects dominate.'
    },
    {
        id: 're20', category: 'Reynolds Number', difficulty: 1, type: 'multiple-choice',
        question: 'What does "μ" (mu) represent in the Reynolds number formula?',
        choices: ['Velocity', 'Density', 'Dynamic viscosity (the stickiness of the fluid)', 'Mass'],
        answer: 'Dynamic viscosity (the stickiness of the fluid)', explanation: 'Dynamic viscosity (μ) measures how "sticky" or resistant to flow a fluid is. Honey has high viscosity, air has low viscosity. Higher viscosity means lower Reynolds number and more laminar flow.'
    },
    {
        id: 're21', category: 'Reynolds Number', difficulty: 3, type: 'true-false',
        question: 'At very low Reynolds numbers, increasing surface roughness on a blade always decreases performance.',
        answer: false, explanation: 'At very low Re (like KidWind models), adding surface roughness (turbulators) can actually IMPROVE performance by tripping the boundary layer to turbulent, helping airflow stay attached and reducing the laminar separation bubble.'
    },
    {
        id: 're22', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'How does altitude affect the Reynolds number?',
        answer: 'Higher altitude means lower air density (ρ), which decreases the Reynolds number',
        explanation: 'At higher altitudes, air is thinner (less dense). Since Re = ρvL/μ, lower density means lower Re. Wind turbines at high altitudes face different aerodynamic conditions than those at sea level.'
    },
    {
        id: 're23', category: 'Reynolds Number', difficulty: 2, type: 'flashcard',
        question: 'Who was Osborne Reynolds?',
        answer: 'A 19th-century scientist who studied fluid flow and identified the dimensionless number that predicts laminar vs. turbulent flow',
        explanation: 'Osborne Reynolds (1842-1912) was an Irish-British engineer who conducted famous pipe flow experiments in 1883. He injected dye into flowing water and observed it transition from smooth (laminar) to chaotic (turbulent) flow.'
    },
    {
        id: 're24', category: 'Reynolds Number', difficulty: 3, type: 'flashcard',
        question: 'What is an "adverse pressure gradient" and why does it matter at low Reynolds numbers?',
        answer: 'A region where pressure increases downstream, causing the boundary layer to slow and potentially separate from the surface',
        explanation: 'On the back half of an airfoil, pressure increases. At low Re, the weak laminar boundary layer cannot overcome this pressure rise and separates. At high Re, the energetic turbulent boundary layer pushes through. This is why low-Re airfoils need special design.'
    },
];

export const electricalQuestions = [
    {
        id: 'elec1', category: 'Electrical Fundamentals', difficulty: 1, type: 'flashcard',
        question: 'What is voltage (volts)?',
        answer: 'The "pressure" or force that pushes electric charge through a circuit',
        explanation: 'Voltage (measured in volts, V) is like water pressure in a pipe. Higher voltage means more force pushing electrons through the wire. A typical AA battery is 1.5V.'
    },
    {
        id: 'elec2', category: 'Electrical Fundamentals', difficulty: 1, type: 'flashcard',
        question: 'What is current (amps)?',
        answer: 'The rate of flow of electric charge through a circuit',
        explanation: 'Current (measured in amperes/amps, A) is like the amount of water flowing through a pipe. More current = more electrons flowing past a point per second.'
    },
    {
        id: 'elec3', category: 'Electrical Fundamentals', difficulty: 1, type: 'flashcard',
        question: 'What is a watt?',
        answer: 'A unit of power — the rate at which energy is used or produced',
        explanation: 'Power (watts) = Voltage × Current (P = V × I). One watt means one joule of energy is being used or produced every second. A 100W light bulb uses 100 joules every second.'
    },
    {
        id: 'elec4', category: 'Electrical Fundamentals', difficulty: 1, type: 'flashcard',
        question: 'What is a joule?',
        answer: 'A unit of energy — the amount of work done or energy transferred',
        explanation: 'One joule is the energy transferred when 1 watt of power is applied for 1 second. Energy (joules) = Power (watts) × Time (seconds). Your electricity bill measures energy in kilowatt-hours (kWh).'
    },
    {
        id: 'elec5', category: 'Electrical Fundamentals', difficulty: 2, type: 'multiple-choice',
        question: 'What is the formula for electrical power?',
        choices: ['P = V + I', 'P = V × I', 'P = V / I', 'P = V - I'],
        answer: 'P = V × I', explanation: 'Power (in watts) equals voltage (in volts) multiplied by current (in amps). For example, a 12V battery supplying 2A of current delivers 24 watts of power.'
    },
    {
        id: 'elec6', category: 'Electrical Fundamentals', difficulty: 2, type: 'formula',
        question: 'A wind turbine generator produces 6 volts at 0.5 amps. How many watts of power is it producing?',
        answer: '3', formula: 'P = V × I = 6 × 0.5', units: 'watts',
        explanation: 'Power = Voltage × Current = 6V × 0.5A = 3 watts. This is a typical output for a small KidWind model turbine in good wind conditions.'
    },
    {
        id: 'elec7', category: 'Electrical Fundamentals', difficulty: 1, type: 'true-false',
        question: 'A kilowatt-hour (kWh) is a unit of power.',
        answer: false, explanation: 'A kilowatt-hour is a unit of ENERGY, not power. It represents using 1,000 watts (1 kilowatt) of power for 1 hour. This is what your electric company charges you for.'
    },
    {
        id: 'elec8', category: 'Electrical Fundamentals', difficulty: 2, type: 'multiple-choice',
        question: 'What does Ohm\'s Law state?',
        choices: ['V = I × R', 'V = P × I', 'V = I / R', 'V = I + R'],
        answer: 'V = I × R', explanation: 'Ohm\'s Law: Voltage = Current × Resistance. It describes how voltage, current, and resistance are related in a circuit. More resistance means less current for the same voltage.'
    },
    {
        id: 'elec9', category: 'Electrical Fundamentals', difficulty: 3, type: 'formula',
        question: 'A circuit has 12 volts and a resistance of 4 ohms. What is the current?',
        answer: '3', formula: 'I = V/R = 12/4', units: 'amps',
        explanation: 'Using Ohm\'s Law rearranged: I = V/R = 12V / 4Ω = 3 amps.'
    },
    {
        id: 'elec10', category: 'Electrical Fundamentals', difficulty: 1, type: 'multiple-choice',
        question: 'What instrument is used to measure the voltage output of a wind turbine?',
        choices: ['Thermometer', 'Multimeter', 'Barometer', 'Speedometer'],
        answer: 'Multimeter', explanation: 'A multimeter can measure voltage (volts), current (amps), and resistance (ohms). In KidWind, you set it to DC volts to measure generator output.'
    },
    {
        id: 'elec11', category: 'Electrical Fundamentals', difficulty: 2, type: 'fill-blank',
        question: 'Energy (in joules) equals power (in watts) multiplied by _____ (in seconds).',
        answer: 'time', explanation: 'E = P × t. For example, a 5-watt generator running for 10 seconds produces 50 joules of energy.'
    },
    {
        id: 'elec12', category: 'Electrical Fundamentals', difficulty: 3, type: 'formula',
        question: 'A turbine produces 8 watts of power for 30 seconds. How much energy (in joules) does it produce?',
        answer: '240', formula: 'E = P × t = 8 × 30', units: 'joules',
        explanation: 'Energy = Power × Time = 8W × 30s = 240 joules.'
    },
    {
        id: 'elec13', category: 'Electrical Fundamentals', difficulty: 2, type: 'true-false',
        question: 'Resistance in a circuit is measured in watts.',
        answer: false, explanation: 'Resistance is measured in ohms (Ω). Watts measure power. Higher resistance restricts the flow of current, like a narrow pipe restricts water flow.'
    },
    // New electrical questions
    {
        id: 'elec14', category: 'Electrical Fundamentals', difficulty: 1, type: 'multiple-choice',
        question: 'What is resistance in an electrical circuit?',
        choices: ['The speed of electricity', 'Opposition to the flow of current', 'The amount of voltage', 'The direction of current'],
        answer: 'Opposition to the flow of current', explanation: 'Resistance (measured in ohms, Ω) opposes current flow, like friction in a pipe. Thin wires have more resistance than thick wires. High resistance means less current for the same voltage.'
    },
    {
        id: 'elec15', category: 'Electrical Fundamentals', difficulty: 2, type: 'flashcard',
        question: 'What is the difference between a series circuit and a parallel circuit?',
        answer: 'Series: components connected end-to-end (one path); Parallel: components connected side-by-side (multiple paths)',
        explanation: 'In series, current flows through each component one after another. If one breaks, all stop. In parallel, current splits across multiple paths. If one breaks, others still work. Batteries in series add voltages; in parallel add current capacity.'
    },
    {
        id: 'elec16', category: 'Electrical Fundamentals', difficulty: 3, type: 'multiple-choice',
        question: 'Two 6V batteries are connected in series. What is the total voltage?',
        choices: ['3V', '6V', '12V', '36V'],
        answer: '12V', explanation: 'In series, voltages add up: 6V + 6V = 12V. Series connection is like stacking batteries end-to-end. The current capacity stays the same, but voltage doubles.'
    },
    {
        id: 'elec17', category: 'Electrical Fundamentals', difficulty: 3, type: 'flashcard',
        question: 'What is electrical efficiency?',
        answer: 'The ratio of useful electrical output to total energy input, expressed as a percentage',
        explanation: 'Efficiency = (useful output / total input) × 100%. A generator that converts 60 joules of mechanical energy into 48 joules of electrical energy is 80% efficient. Energy is "lost" to heat from friction and resistance.'
    },
    {
        id: 'elec18', category: 'Electrical Fundamentals', difficulty: 2, type: 'multiple-choice',
        question: 'What happens to current if you double the resistance but keep voltage the same?',
        choices: ['Current doubles', 'Current is halved', 'Current stays the same', 'Current becomes zero'],
        answer: 'Current is halved', explanation: 'From Ohm\'s Law (I = V/R), if R doubles and V stays the same, current I is halved. More resistance means less current, just like a narrower pipe allows less water flow.'
    },
    {
        id: 'elec19', category: 'Electrical Fundamentals', difficulty: 1, type: 'true-false',
        question: 'Electrons flow from the positive terminal to the negative terminal of a battery.',
        answer: false, explanation: 'Electrons actually flow from negative to positive (electron flow). Conventional current, used in most diagrams, flows from positive to negative. This historical convention was established before electrons were discovered.'
    },
    {
        id: 'elec20', category: 'Electrical Fundamentals', difficulty: 3, type: 'formula',
        question: 'A generator produces 4.5V and 0.8A. What is the load resistance?',
        answer: '5.625', formula: 'R = V/I = 4.5/0.8', units: 'ohms',
        explanation: 'Using Ohm\'s Law rearranged: R = V/I = 4.5V / 0.8A = 5.625Ω.'
    },
    {
        id: 'elec21', category: 'Electrical Fundamentals', difficulty: 3, type: 'flashcard',
        question: 'What is the relationship between power, voltage, and resistance?',
        answer: 'P = V²/R — power equals voltage squared divided by resistance',
        explanation: 'This is derived by combining P = V × I with Ohm\'s Law (I = V/R). So P = V × (V/R) = V²/R. It shows that for a given resistance, power increases with the square of voltage.'
    },
];
