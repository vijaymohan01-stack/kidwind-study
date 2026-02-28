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
];
