// KidWind QuizBowl Question Database — Part 2: AC/DC, Gear Ratios, Betz Limit, Turbine Design, Environment, Competition
export const acdcQuestions = [
    {
        id: 'acdc1', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'flashcard',
        question: 'What is the difference between AC and DC current?',
        answer: 'DC flows in one direction; AC periodically reverses direction',
        explanation: 'DC (Direct Current) flows steadily in one direction — like a battery. AC (Alternating Current) switches direction back and forth — this is what comes from wall outlets. In the US, AC switches 60 times per second (60 Hz).'
    },
    {
        id: 'acdc2', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'multiple-choice',
        question: 'What does a rectifier do?', choices: ['Converts DC to AC', 'Converts AC to DC', 'Stores electricity', 'Measures voltage'],
        answer: 'Converts AC to DC', explanation: 'A rectifier is an electrical device that converts alternating current (AC) into direct current (DC). Most electronics need DC power, so rectifiers are very common.'
    },
    {
        id: 'acdc3', category: 'AC/DC & Rectifiers', difficulty: 2, type: 'flashcard',
        question: 'What does an inverter do?', answer: 'Converts DC to AC (the opposite of a rectifier)',
        explanation: 'An inverter does the opposite of a rectifier. Solar panels and batteries produce DC, but homes use AC. An inverter converts DC into AC so it can power household appliances.'
    },
    {
        id: 'acdc4', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'true-false',
        question: 'The electricity from a wall outlet in the US is direct current (DC).', answer: false,
        explanation: 'US wall outlets provide alternating current (AC) at 120 volts and 60 Hz. AC is used for power distribution because it\'s easier to transform to different voltages for long-distance transmission.'
    },
    {
        id: 'acdc5', category: 'AC/DC & Rectifiers', difficulty: 2, type: 'multiple-choice',
        question: 'Most KidWind generators produce what type of current?',
        choices: ['Only AC', 'Only DC', 'Both AC and DC at the same time', 'Neither'],
        answer: 'Only DC', explanation: 'Standard KidWind generators produce DC voltage. Students use multimeters set to DC volts to measure their turbine\'s output.'
    },
    {
        id: 'acdc6', category: 'AC/DC & Rectifiers', difficulty: 2, type: 'fill-blank',
        question: 'To convert DC from solar panels to AC for home use, you need an _____.',
        answer: 'inverter', explanation: 'An inverter converts direct current (DC) to alternating current (AC). This is essential for connecting solar panels or battery systems to household electrical systems.'
    },
    {
        id: 'acdc7', category: 'AC/DC & Rectifiers', difficulty: 3, type: 'multiple-choice',
        question: 'Why is AC used for long-distance power transmission instead of DC?',
        choices: ['AC is cheaper to make', 'AC voltage is easy to step up/down with transformers', 'AC wires are thinner', 'DC doesn\'t exist in large amounts'],
        answer: 'AC voltage is easy to step up/down with transformers', explanation: 'Transformers can efficiently change AC voltage levels. Power is transmitted at very high voltage (low current) to reduce energy loss in wires, then stepped down to safe levels for homes.'
    },
    {
        id: 'acdc8', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'flashcard',
        question: 'What does a generator do in a wind turbine?',
        answer: 'Converts the rotational (mechanical) energy of the spinning blades into electrical energy',
        explanation: 'A generator uses magnets and coils of wire. When the blades spin the shaft, magnets rotate past coils (or vice versa), inducing an electric current through electromagnetic induction.'
    },
    {
        id: 'acdc9', category: 'AC/DC & Rectifiers', difficulty: 3, type: 'flashcard',
        question: 'What is electromagnetic induction?',
        answer: 'The process of generating electricity by moving a magnet near a coil of wire (or vice versa)',
        explanation: 'Discovered by Michael Faraday, electromagnetic induction is the fundamental principle behind all generators. A changing magnetic field through a coil induces voltage across the coil, creating current.'
    },
    {
        id: 'acdc10', category: 'AC/DC & Rectifiers', difficulty: 2, type: 'true-false',
        question: 'A multimeter set to DC volts can accurately measure AC voltage.',
        answer: false, explanation: 'You must use the correct setting on the multimeter. DC volts (V—) for DC sources, AC volts (V~) for AC sources. Using the wrong setting will give inaccurate readings.'
    },
    // New AC/DC questions
    {
        id: 'acdc11', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'flashcard',
        question: 'What does Hz (Hertz) measure?',
        answer: 'The frequency of AC current — how many times per second the current reverses direction',
        explanation: 'In the US, electricity is 60 Hz, meaning the current changes direction 60 times per second. In Europe, it\'s 50 Hz. A generator\'s output frequency depends on how fast it spins.'
    },
    {
        id: 'acdc12', category: 'AC/DC & Rectifiers', difficulty: 2, type: 'multiple-choice',
        question: 'What is a bridge rectifier?',
        choices: ['A bridge that conducts electricity', 'A circuit of four diodes that converts AC to DC', 'A device that stores electricity', 'A type of generator'],
        answer: 'A circuit of four diodes that converts AC to DC', explanation: 'A bridge rectifier uses 4 diodes arranged in a diamond pattern to convert both halves of the AC wave to DC, which is more efficient than a half-wave rectifier that only uses one half.'
    },
    {
        id: 'acdc13', category: 'AC/DC & Rectifiers', difficulty: 3, type: 'flashcard',
        question: 'What is a transformer and why is it important for power distribution?',
        answer: 'A device that changes AC voltage levels — essential for efficient long-distance power transmission',
        explanation: 'Transformers can step voltage up (for transmission) or down (for home use). Power lines carry electricity at very high voltage (100,000+ V) to reduce current and line losses. Transformers only work with AC, which is why AC won the "War of Currents."'
    },
    {
        id: 'acdc14', category: 'AC/DC & Rectifiers', difficulty: 3, type: 'multiple-choice',
        question: 'Why does power loss in transmission lines increase with higher current?',
        choices: ['It doesn\'t increase', 'Power loss = I²R — it increases with the SQUARE of current', 'Higher current makes wires expand', 'More current means more sparking'],
        answer: 'Power loss = I²R — it increases with the SQUARE of current', explanation: 'Power lost as heat in wires = I²R. Doubling the current quadruples the power loss. This is why electricity is transmitted at high voltage and low current — reducing I dramatically reduces losses.'
    },
    {
        id: 'acdc15', category: 'AC/DC & Rectifiers', difficulty: 1, type: 'true-false',
        question: 'A battery produces alternating current (AC).',
        answer: false, explanation: 'Batteries produce direct current (DC) — the current flows in only one direction. The chemical reaction inside the battery creates a steady voltage that pushes electrons one way through the circuit.'
    },
];

export const gearRatioQuestions = [
    {
        id: 'gear1', category: 'Gear Ratios', difficulty: 1, type: 'flashcard',
        question: 'What is a gear ratio?', answer: 'The ratio of teeth on two meshed gears, determining how speed and torque change',
        explanation: 'If a big gear with 40 teeth drives a small gear with 10 teeth, the ratio is 4:1. The small gear spins 4 times for every 1 rotation of the big gear, but with less torque.'
    },
    {
        id: 'gear2', category: 'Gear Ratios', difficulty: 1, type: 'multiple-choice',
        question: 'Why do wind turbines use gearboxes?',
        choices: ['To slow down the blades', 'To increase generator RPM and power output', 'To make them quieter', 'To change blade direction'],
        answer: 'To increase generator RPM and power output', explanation: 'Wind turbine blades turn slowly, but generators work best at high speeds. A gearbox multiplies rotational speed so the generator shaft spins much faster than the blades.'
    },
    {
        id: 'gear3', category: 'Gear Ratios', difficulty: 2, type: 'formula',
        question: 'A gear has 64 teeth driving a pinion gear with 8 teeth. What is the gear ratio?',
        answer: '8', formula: 'Gear ratio = 64/8', units: ':1',
        explanation: 'Gear ratio = Driver teeth / Driven teeth = 64/8 = 8:1. This means the generator shaft spins 8 times for every 1 rotation of the turbine blades.'
    },
    {
        id: 'gear4', category: 'Gear Ratios', difficulty: 2, type: 'multiple-choice',
        question: 'A KidWind turbine has a 7:1 gear ratio. If the blades spin at 100 RPM, how fast does the generator spin?',
        choices: ['100 RPM', '14 RPM', '700 RPM', '7 RPM'],
        answer: '700 RPM', explanation: 'Generator RPM = Blade RPM × Gear ratio = 100 × 7 = 700 RPM. The gearbox multiplies the rotational speed by the gear ratio.'
    },
    {
        id: 'gear5', category: 'Gear Ratios', difficulty: 1, type: 'true-false',
        question: 'A higher gear ratio always means more electrical power output.',
        answer: false, explanation: 'While a higher gear ratio increases generator RPM, there\'s a trade-off. Higher ratios mean more friction and require more torque to turn. If the wind can\'t provide enough torque, the blades won\'t spin. There\'s an optimal ratio for each design.'
    },
    {
        id: 'gear6', category: 'Gear Ratios', difficulty: 3, type: 'flashcard',
        question: 'What is the trade-off between gear ratio and torque?',
        answer: 'Higher gear ratio = more speed but less torque; lower gear ratio = less speed but more torque',
        explanation: 'This is the fundamental gear trade-off. A high ratio lets the generator spin fast but requires more force to turn. In low wind, a lower ratio might work better because the blades can start spinning with less wind force.'
    },
    {
        id: 'gear7', category: 'Gear Ratios', difficulty: 2, type: 'fill-blank',
        question: 'In a gearbox, the gear ratio equals the number of teeth on the _____ gear divided by the teeth on the driven gear.',
        answer: 'driving', explanation: 'The driving gear (connected to the blades) is usually larger. Dividing its teeth by the smaller driven gear\'s teeth gives the speed multiplication ratio.'
    },
    {
        id: 'gear8', category: 'Gear Ratios', difficulty: 3, type: 'formula',
        question: 'A turbine blade spins at 60 RPM with a 5:1 gear ratio. The generator produces 0.8 volts per 100 RPM. What voltage does it produce?',
        answer: '2.4', formula: 'Gen RPM = 60×5 = 300; Voltage = 300×(0.8/100)', units: 'volts',
        explanation: 'Generator RPM = 60 × 5 = 300 RPM. Voltage = 300 × (0.8/100) = 300 × 0.008 = 2.4 volts.'
    },
    // New gear ratio questions
    {
        id: 'gear9', category: 'Gear Ratios', difficulty: 1, type: 'flashcard',
        question: 'What is torque?',
        answer: 'A twisting or turning force — the force that causes rotation',
        explanation: 'Think of turning a wrench: the force you apply times the distance from the bolt is the torque. In wind turbines, the wind exerts torque on the blades, which must overcome the resistance of the generator and gearbox.'
    },
    {
        id: 'gear10', category: 'Gear Ratios', difficulty: 2, type: 'true-false',
        question: 'A direct-drive wind turbine has no gearbox.',
        answer: true, explanation: 'Some large modern turbines use "direct drive" generators that work at low RPM, eliminating the gearbox entirely. This reduces mechanical complexity and maintenance but requires a larger, heavier generator.'
    },
    {
        id: 'gear11', category: 'Gear Ratios', difficulty: 3, type: 'multiple-choice',
        question: 'A KidWind turbine with a 10:1 gear ratio can\'t start spinning in light wind. What should you try?',
        choices: ['Increase the gear ratio to 15:1', 'Decrease the gear ratio (e.g., to 5:1)', 'Remove the blades', 'Add more blades of the same design'],
        answer: 'Decrease the gear ratio (e.g., to 5:1)', explanation: 'A lower gear ratio requires less torque to start spinning. In light wind, the blades can\'t produce enough torque for a high-ratio gearbox. Lowering the ratio trades generator RPM for the ability to spin in lighter winds.'
    },
    {
        id: 'gear12', category: 'Gear Ratios', difficulty: 3, type: 'flashcard',
        question: 'What is a compound gear train?',
        answer: 'Multiple pairs of gears connected together to achieve higher total gear ratios',
        explanation: 'Two gear pairs of 4:1 each, connected together, create a total ratio of 4 × 4 = 16:1. Wind turbine gearboxes typically use compound gear trains (often planetary gears) to achieve ratios of 100:1 or more.'
    },
    {
        id: 'gear13', category: 'Gear Ratios', difficulty: 2, type: 'formula',
        question: 'A driving gear has 48 teeth and the driven gear has 12 teeth. If the driving gear spins at 80 RPM, how fast does the driven gear spin?',
        answer: '320', formula: 'Ratio = 48/12 = 4; Output RPM = 80 × 4', units: 'RPM',
        explanation: 'Gear ratio = 48/12 = 4:1. The driven gear spins 4 times faster: 80 × 4 = 320 RPM.'
    },
];

export const betzLimitQuestions = [
    {
        id: 'betz1', category: 'Betz Limit & Efficiency', difficulty: 1, type: 'flashcard',
        question: 'What is the Betz Limit?', answer: 'The theoretical maximum efficiency of a wind turbine: 59.3%',
        explanation: 'Albert Betz proved mathematically in 1919 that no wind turbine can convert more than 59.3% (16/27) of the kinetic energy of the wind into mechanical energy. This is a fundamental physical limit.'
    },
    {
        id: 'betz2', category: 'Betz Limit & Efficiency', difficulty: 1, type: 'multiple-choice',
        question: 'What is the maximum percentage of wind energy a turbine can theoretically capture?',
        choices: ['100%', '75%', '59.3%', '50%'],
        answer: '59.3%', explanation: 'The Betz Limit states 59.3% is the theoretical maximum. This is because some wind must continue flowing past the turbine — if you extracted all the energy, the air would stop and block incoming wind.'
    },
    {
        id: 'betz3', category: 'Betz Limit & Efficiency', difficulty: 2, type: 'true-false',
        question: 'A company claims their turbine is 73% efficient. This is physically possible.',
        answer: false, explanation: 'The Betz Limit (59.3%) is a fundamental physical limit that cannot be exceeded. Any claim above 59.3% violates the laws of physics and is scientifically impossible.'
    },
    {
        id: 'betz4', category: 'Betz Limit & Efficiency', difficulty: 2, type: 'multiple-choice',
        question: 'Why can\'t a wind turbine capture 100% of the wind\'s energy?',
        choices: ['Generators aren\'t perfect', 'The air must keep flowing through — if stopped it would block incoming wind', 'Blades aren\'t perfectly shaped', 'Friction wastes some energy'],
        answer: 'The air must keep flowing through — if stopped it would block incoming wind',
        explanation: 'If a turbine extracted ALL the kinetic energy, the air behind it would have zero velocity and pile up, blocking new air from reaching the turbine. Some wind must pass through.'
    },
    {
        id: 'betz5', category: 'Betz Limit & Efficiency', difficulty: 2, type: 'flashcard',
        question: 'What efficiency do modern full-scale wind turbines actually achieve?',
        answer: 'About 35-50% (below the 59.3% Betz Limit)',
        explanation: 'Real turbines achieve less than the Betz Limit due to blade drag, generator losses, gearbox friction, and other inefficiencies. KidWind model turbines typically achieve 10-15% efficiency.'
    },
    {
        id: 'betz6', category: 'Betz Limit & Efficiency', difficulty: 3, type: 'fill-blank',
        question: 'The Betz Limit expressed as a fraction is ___/27.',
        answer: '16', explanation: '16/27 = 0.5926 ≈ 59.3%. This fraction comes from the mathematical optimization of the ratio of wind speeds before and after the turbine.'
    },
    {
        id: 'betz7', category: 'Betz Limit & Efficiency', difficulty: 3, type: 'flashcard',
        question: 'What factors cause real turbines to perform below the Betz Limit?',
        answer: 'Blade drag, generator losses, gearbox friction, tip losses, wake effects, and non-ideal blade shapes',
        explanation: 'Every component introduces some energy loss. The Betz Limit assumes perfect conditions with no friction, perfect blade shapes, and no tip losses. Reality always falls short.'
    },
    // New Betz Limit questions
    {
        id: 'betz8', category: 'Betz Limit & Efficiency', difficulty: 1, type: 'true-false',
        question: 'The Betz Limit applies to all types of wind turbines, both HAWTs and VAWTs.',
        answer: true, explanation: 'The Betz Limit is a fundamental physical law that applies to ANY device extracting energy from a moving fluid stream. No rotor design — horizontal, vertical, or anything else — can exceed 59.3% efficiency.'
    },
    {
        id: 'betz9', category: 'Betz Limit & Efficiency', difficulty: 2, type: 'flashcard',
        question: 'What are "tip losses" in a wind turbine?',
        answer: 'Energy lost at the blade tips where high-pressure air leaks around to the low-pressure side, creating tip vortices',
        explanation: 'At the blade tip, air from the high-pressure bottom side curls around to the low-pressure top side, creating swirling vortices. These vortices waste energy and reduce efficiency, similar to wingtip vortices on airplanes.'
    },
    {
        id: 'betz10', category: 'Betz Limit & Efficiency', difficulty: 3, type: 'multiple-choice',
        question: 'At what ratio of downstream to upstream wind speed does the Betz Limit occur?',
        choices: ['0 (air completely stops)', '1/3', '1/2', '2/3'],
        answer: '1/3', explanation: 'The Betz Limit is achieved when the wind leaving the turbine is exactly 1/3 the speed of the incoming wind. At this optimal ratio, the turbine extracts the maximum possible energy from the airstream.'
    },
    {
        id: 'betz11', category: 'Betz Limit & Efficiency', difficulty: 3, type: 'flashcard',
        question: 'What is the capacity factor of a wind turbine?',
        answer: 'The ratio of actual energy produced over time to the maximum possible if running at full capacity 24/7 (typically 25-45%)',
        explanation: 'A turbine rated at 2 MW that produces an average of 700 kW has a capacity factor of 35%. Wind doesn\'t blow at rated speed all the time, so capacity factors are always less than 100%. Offshore wind farms often have higher capacity factors (40-50%).'
    },
    {
        id: 'betz12', category: 'Betz Limit & Efficiency', difficulty: 2, type: 'multiple-choice',
        question: 'A KidWind model turbine is about 10% efficient. What does this mean?',
        choices: ['It captures 10% of the Betz Limit', 'It converts 10% of the wind\'s kinetic energy to electricity', 'It works 10% of the time', 'It uses 10% of the wind'],
        answer: 'It converts 10% of the wind\'s kinetic energy to electricity', explanation: 'Overall efficiency includes aerodynamic losses, mechanical losses (friction, gearbox), and electrical losses (generator). A 10% efficiency means 90% of the available wind energy is lost to these various factors.'
    },
];

export const turbineDesignQuestions = [
    {
        id: 'td1', category: 'Turbine Design', difficulty: 1, type: 'flashcard',
        question: 'What does HAWT stand for?', answer: 'Horizontal Axis Wind Turbine',
        explanation: 'HAWTs have blades that spin around a horizontal axis (like a pinwheel facing the wind). These are the most common type of wind turbine used in wind farms today.'
    },
    {
        id: 'td2', category: 'Turbine Design', difficulty: 1, type: 'flashcard',
        question: 'What does VAWT stand for?', answer: 'Vertical Axis Wind Turbine',
        explanation: 'VAWTs have blades that spin around a vertical axis (like an eggbeater). They can capture wind from any direction without needing to face the wind, but are generally less efficient than HAWTs.'
    },
    {
        id: 'td3', category: 'Turbine Design', difficulty: 1, type: 'multiple-choice',
        question: 'Which type of wind turbine is most commonly used in large wind farms?',
        choices: ['VAWT', 'HAWT', 'Both equally', 'Neither'],
        answer: 'HAWT', explanation: 'HAWTs are used in nearly all modern wind farms because they are more efficient at capturing wind energy and can be built very large (over 100m blade diameter).'
    },
    {
        id: 'td4', category: 'Turbine Design', difficulty: 2, type: 'flashcard',
        question: 'What is the nacelle?', answer: 'The housing on top of the tower that contains the generator, gearbox, and other key components',
        explanation: 'The nacelle is like the "brain" of the turbine. It contains the gearbox, generator, brake system, and control electronics. It sits on top of the tower behind the hub where blades attach.'
    },
    {
        id: 'td5', category: 'Turbine Design', difficulty: 2, type: 'multiple-choice',
        question: 'What is the tip speed ratio (TSR)?',
        choices: ['The speed of the wind at the blade tip', 'The ratio of blade tip speed to wind speed', 'The number of blade tips', 'The speed the turbine was built'],
        answer: 'The ratio of blade tip speed to wind speed', explanation: 'TSR = (blade tip speed) / (wind speed). Modern turbines operate best at TSR of 6-8. If TSR is too low, wind passes through unused. If too high, the blades create too much turbulence.'
    },
    {
        id: 'td6', category: 'Turbine Design', difficulty: 1, type: 'true-false',
        question: 'Most modern wind turbines have 3 blades.', answer: true,
        explanation: 'Three blades provide the best balance of efficiency, stability, and cost. Two blades are cheaper but less stable, while four or more blades catch less wind per blade due to interference.'
    },
    {
        id: 'td7', category: 'Turbine Design', difficulty: 2, type: 'multiple-choice',
        question: 'What is a VAWT advantage over a HAWT?',
        choices: ['Higher efficiency', 'Can capture wind from any direction', 'Generates more power', 'Has fewer parts'],
        answer: 'Can capture wind from any direction', explanation: 'VAWTs don\'t need to be pointed into the wind like HAWTs. This makes them better for locations with frequently changing wind directions, and they work in gusty or turbulent conditions.'
    },
    {
        id: 'td8', category: 'Turbine Design', difficulty: 1, type: 'flashcard',
        question: 'What are the main components of a wind turbine?',
        answer: 'Tower, rotor (hub + blades), nacelle (gearbox + generator), and foundation',
        explanation: 'The tower supports everything. The rotor (blades + hub) catches the wind. The nacelle houses the gearbox and generator. The foundation anchors it to the ground.'
    },
    {
        id: 'td9', category: 'Turbine Design', difficulty: 3, type: 'fill-blank',
        question: 'The optimal tip speed ratio for most modern 3-blade turbines is approximately ___ to 8.',
        answer: '6', explanation: 'A TSR of 6-8 is typical for modern 3-blade HAWTs. At this ratio, the blades extract the most energy without creating too much turbulence or letting too much wind pass through.'
    },
    {
        id: 'td10', category: 'Turbine Design', difficulty: 2, type: 'flashcard',
        question: 'What is cut-in speed?', answer: 'The minimum wind speed at which a turbine starts generating electricity (typically 3-4 m/s)',
        explanation: 'Below the cut-in speed, there\'s not enough wind energy to overcome friction and start spinning the generator. Different turbines have different cut-in speeds based on their design.'
    },
    {
        id: 'td11', category: 'Turbine Design', difficulty: 2, type: 'flashcard',
        question: 'What is cut-out speed?', answer: 'The maximum wind speed at which a turbine shuts down for safety (typically 25 m/s)',
        explanation: 'In very high winds, the turbine could be damaged, so it shuts down. The blades are "feathered" (turned parallel to wind) or brakes are applied to stop rotation.'
    },
    {
        id: 'td12', category: 'Turbine Design', difficulty: 3, type: 'multiple-choice',
        question: 'Why do turbine blades taper (get thinner) toward the tip?',
        choices: ['To save material cost', 'The tip moves faster so needs a smaller chord for optimal performance', 'For aesthetics', 'To reduce noise only'],
        answer: 'The tip moves faster so needs a smaller chord for optimal performance', explanation: 'The tip moves much faster than the root, encountering more relative wind. A smaller chord (width) at the tip maintains the correct angle of attack and prevents excessive drag at high tip speeds.'
    },
    // New turbine design questions
    {
        id: 'td13', category: 'Turbine Design', difficulty: 1, type: 'multiple-choice',
        question: 'What is the hub of a wind turbine?',
        choices: ['The base of the tower', 'The center piece that connects the blades to the shaft', 'The generator', 'The gearbox'],
        answer: 'The center piece that connects the blades to the shaft', explanation: 'The hub is the central component that attaches the blades to the main shaft. Together the hub and blades form the "rotor." In pitch-controlled turbines, the hub also contains mechanisms to rotate each blade.'
    },
    {
        id: 'td14', category: 'Turbine Design', difficulty: 2, type: 'true-false',
        question: 'More blades on a wind turbine always means more power.',
        answer: false, explanation: 'Adding more blades increases drag and blade interference (each blade runs in the wake/disturbed air of the previous one). The optimal is usually 2-3 blades. More blades produce more torque but less speed, and overall efficiency drops.'
    },
    {
        id: 'td15', category: 'Turbine Design', difficulty: 3, type: 'flashcard',
        question: 'What is a Savonius wind turbine?',
        answer: 'A simple VAWT that uses scooped/cupped blades and primarily operates on drag force rather than lift',
        explanation: 'Savonius turbines look like a split cylinder. They\'re simple to build but less efficient than lift-based turbines. They produce high torque at low speeds, making them good for water pumping but not electricity generation.'
    },
    {
        id: 'td16', category: 'Turbine Design', difficulty: 3, type: 'multiple-choice',
        question: 'What is a Darrieus wind turbine?',
        choices: ['A type of HAWT', 'A lift-based VAWT with curved or straight vertical blades', 'A turbine that runs on solar power', 'A very old-fashioned windmill'],
        answer: 'A lift-based VAWT with curved or straight vertical blades', explanation: 'Darrieus turbines are VAWTs that use airfoil-shaped blades to generate lift. They\'re more efficient than Savonius but less efficient than HAWTs. The "eggbeater" shape is a classic Darrieus design.'
    },
    {
        id: 'td17', category: 'Turbine Design', difficulty: 2, type: 'flashcard',
        question: 'What is yaw control?',
        answer: 'The system that rotates the nacelle to keep the rotor facing into the wind',
        explanation: 'Large HAWTs have a yaw motor that turns the nacelle on top of the tower. Wind direction sensors detect changes and the yaw system rotates the turbine to face the wind for maximum energy capture.'
    },
    {
        id: 'td18', category: 'Turbine Design', difficulty: 1, type: 'fill-blank',
        question: 'The blades and hub together form the _____ of a wind turbine.',
        answer: 'rotor', explanation: 'The rotor is the spinning assembly consisting of the blades attached to the hub. The rotor is connected to the main shaft, which transfers mechanical energy to the gearbox and generator.'
    },
];

export const environmentQuestions = [
    {
        id: 'env1', category: 'Energy & Environment', difficulty: 1, type: 'flashcard',
        question: 'Is wind energy renewable or non-renewable?', answer: 'Renewable',
        explanation: 'Wind is caused by the sun heating the Earth unevenly. As long as the sun shines, wind will blow. Wind energy doesn\'t run out and doesn\'t produce greenhouse gases during operation.'
    },
    {
        id: 'env2', category: 'Energy & Environment', difficulty: 1, type: 'multiple-choice',
        question: 'Which of these is NOT a renewable energy source?',
        choices: ['Wind', 'Solar', 'Natural gas', 'Hydroelectric'],
        answer: 'Natural gas', explanation: 'Natural gas is a fossil fuel formed over millions of years. Once burned, it\'s gone. Wind, solar, and hydroelectric power are renewable — they rely on natural processes that continuously replenish.'
    },
    {
        id: 'env3', category: 'Energy & Environment', difficulty: 2, type: 'true-false',
        question: 'Wind turbines produce greenhouse gas emissions while generating electricity.',
        answer: false, explanation: 'Wind turbines produce ZERO emissions during operation. There are some emissions during manufacturing and installation, but over its lifetime, a wind turbine\'s carbon footprint is tiny compared to fossil fuel plants.'
    },
    {
        id: 'env4', category: 'Energy & Environment', difficulty: 2, type: 'multiple-choice',
        question: 'What is a common environmental concern about wind farms?',
        choices: ['Air pollution', 'Water contamination', 'Bird and bat mortality', 'Soil erosion'],
        answer: 'Bird and bat mortality', explanation: 'Wind turbines can pose a risk to flying animals. However, the impact is relatively small compared to other human structures (buildings, vehicles). Careful siting and modern designs help minimize this.'
    },
    {
        id: 'env5', category: 'Energy & Environment', difficulty: 1, type: 'flashcard',
        question: 'What causes wind?', answer: 'Uneven heating of the Earth\'s surface by the sun',
        explanation: 'The sun heats land faster than water, and equatorial regions more than poles. This creates temperature differences, which create pressure differences, which cause air to move as wind.'
    },
    {
        id: 'env6', category: 'Energy & Environment', difficulty: 2, type: 'fill-blank',
        question: 'Wind energy is considered _____ because it doesn\'t run out and doesn\'t produce emissions during operation.',
        answer: 'renewable', explanation: 'Renewable energy comes from sources that are naturally replenished. Wind, solar, hydro, and geothermal are all renewable. Fossil fuels (coal, oil, natural gas) are non-renewable.'
    },
    {
        id: 'env7', category: 'Energy & Environment', difficulty: 3, type: 'multiple-choice',
        question: 'What percentage of US electricity came from wind power in recent years?',
        choices: ['About 1%', 'About 10%', 'About 50%', 'About 90%'],
        answer: 'About 10%', explanation: 'Wind power has grown rapidly and now provides about 10% of US electricity generation. This share is growing as more wind farms are built.'
    },
    {
        id: 'env8', category: 'Energy & Environment', difficulty: 2, type: 'flashcard',
        question: 'What factors determine good wind farm locations?',
        answer: 'Consistent high wind speeds, open terrain, proximity to power grid, minimal environmental impact',
        explanation: 'Wind farms are ideally placed on ridgelines, plains, or offshore where winds are strong and steady. They must also consider wildlife habitats, nearby communities, and connection to the existing power grid.'
    },
    // New environment questions
    {
        id: 'env9', category: 'Energy & Environment', difficulty: 1, type: 'true-false',
        question: 'Wind energy is the fastest-growing source of electricity worldwide.',
        answer: false, explanation: 'Solar energy has recently surpassed wind as the fastest-growing source of electricity, though wind remains one of the top growing renewable sources. Both solar and wind are growing much faster than fossil fuels.'
    },
    {
        id: 'env10', category: 'Energy & Environment', difficulty: 3, type: 'flashcard',
        question: 'What is the "carbon payback period" for a wind turbine?',
        answer: 'The time it takes for the turbine to generate enough clean energy to offset the carbon emissions from its manufacturing — typically 6-12 months',
        explanation: 'Although building a turbine creates some CO₂ (mining materials, manufacturing, transportation), a typical wind turbine generates enough clean energy in about 6-12 months to "pay back" those emissions. It then produces zero-emission electricity for 20-30 more years.'
    },
    {
        id: 'env11', category: 'Energy & Environment', difficulty: 2, type: 'multiple-choice',
        question: 'What is offshore wind energy?',
        choices: ['Wind turbines built near the coast on land', 'Wind turbines installed in bodies of water', 'Wind energy stored offshore', 'Wind power exported to other countries'],
        answer: 'Wind turbines installed in bodies of water', explanation: 'Offshore wind farms are built in oceans, seas, or large lakes. The wind is typically stronger and more consistent over water. Though more expensive to build, offshore turbines produce significantly more energy.'
    },
    {
        id: 'env12', category: 'Energy & Environment', difficulty: 3, type: 'true-false',
        question: 'A single large modern wind turbine can power approximately 1,500 average US homes.',
        answer: true, explanation: 'A modern 3 MW wind turbine operating at about 30-35% capacity factor produces enough electricity annually to power roughly 1,500 average US homes. Larger 12-15 MW offshore turbines can power 5,000+ homes.'
    },
    {
        id: 'env13', category: 'Energy & Environment', difficulty: 3, type: 'flashcard',
        question: 'What is "energy storage" and why is it important for wind energy?',
        answer: 'Technology (like batteries) that saves excess wind energy for use when the wind isn\'t blowing',
        explanation: 'Wind doesn\'t always blow when electricity is needed. Energy storage — using batteries, pumped hydro, compressed air, or hydrogen — can save excess wind energy and release it during calm periods, making wind power more reliable.'
    },
];

export const competitionQuestions = [
    {
        id: 'comp1', category: 'KidWind Competition', difficulty: 1, type: 'flashcard',
        question: 'What is the KidWind Challenge?', answer: 'A hands-on competition where students design, build, and test small wind turbines and solar devices',
        explanation: 'KidWind is organized by the KidWind Project. Teams design turbines, test them in wind tunnels, present to judges, and take a knowledge test about clean energy concepts.'
    },
    {
        id: 'comp2', category: 'KidWind Competition', difficulty: 1, type: 'multiple-choice',
        question: 'What are the main components of the KidWind Challenge competition?',
        choices: ['Only building a turbine', 'Building a turbine, knowledge test, presentations, and instant challenges', 'Only a written test', 'Only a science fair presentation'],
        answer: 'Building a turbine, knowledge test, presentations, and instant challenges',
        explanation: 'KidWind is a multi-faceted competition. Teams build and test turbines, take a knowledge quiz, present their design process to judges, and tackle instant challenges that test on-the-spot problem solving.'
    },
    {
        id: 'comp3', category: 'KidWind Competition', difficulty: 1, type: 'true-false',
        question: 'The 2026 KidWind World Challenge will be held in Madison, Wisconsin.',
        answer: true, explanation: 'The 2026 World KidWind Challenge will be held at the University of Wisconsin-Madison. Teams qualify through regional/state competitions like the Wisconsin KidWind Challenge.'
    },
    {
        id: 'comp4', category: 'KidWind Competition', difficulty: 2, type: 'flashcard',
        question: 'What are Instant Challenges in KidWind?', answer: 'On-the-spot challenges that test teamwork, problem-solving, and clean energy knowledge',
        explanation: 'Instant Challenges are surprise activities given to teams during the competition. They test quick thinking, creativity, and how well the team works together under pressure.'
    },
    {
        id: 'comp5', category: 'KidWind Competition', difficulty: 1, type: 'flashcard',
        question: 'What are the "10 Big Questions About Energy"?',
        answer: 'KidWind\'s core study topics covering fundamental energy concepts used in knowledge tests and judging',
        explanation: 'These 10 questions cover renewable energy basics, how turbines work, electricity fundamentals, environmental impacts, and more. They form the foundation of what judges ask about and what appears on knowledge tests.'
    },
    {
        id: 'comp6', category: 'KidWind Competition', difficulty: 2, type: 'multiple-choice',
        question: 'What is the KidWind knowledge test format for the 2026 Worlds?',
        choices: ['Individual online test', 'Pen and paper team quiz', 'Oral presentation only', 'Multiple choice app'],
        answer: 'Pen and paper team quiz', explanation: 'For the 2026 World KidWind Challenge, the knowledge test is a pen and paper quiz that teams complete together during a scheduled session.'
    },
    {
        id: 'comp7', category: 'KidWind Competition', difficulty: 2, type: 'flashcard',
        question: 'Why is documentation important in KidWind?',
        answer: 'Judges evaluate your design process — documenting shows your thinking, testing, and improvements',
        explanation: 'Good documentation shows judges how you researched, designed, tested, and iterated your turbine. It demonstrates scientific thinking and engineering practices, which are heavily weighted in scoring.'
    },
    // New competition questions
    {
        id: 'comp8', category: 'KidWind Competition', difficulty: 1, type: 'multiple-choice',
        question: 'What tool is commonly used to test KidWind turbines?',
        choices: ['A hairdryer', 'A wind tunnel with a large fan', 'An outdoor hilltop', 'A vacuum cleaner'],
        answer: 'A wind tunnel with a large fan', explanation: 'KidWind competitions use standardized wind tunnels with large fans to test turbines under consistent, repeatable wind conditions. All teams test in the same tunnel so results are comparable.'
    },
    {
        id: 'comp9', category: 'KidWind Competition', difficulty: 2, type: 'true-false',
        question: 'In KidWind, the team with the highest power output always wins the competition.',
        answer: false, explanation: 'KidWind scoring includes multiple categories: power output, design presentation, knowledge test, and instant challenges. A team with moderate power but excellent presentation and knowledge can beat a team with the highest power output.'
    },
    {
        id: 'comp10', category: 'KidWind Competition', difficulty: 2, type: 'flashcard',
        question: 'What is the engineering design process used in KidWind?',
        answer: 'Ask → Research → Imagine → Plan → Create → Test → Improve → Share',
        explanation: 'This iterative process guides teams from understanding the problem through designing, building, and improving their turbine. Judges look for evidence that teams followed this process and iterated on their design.'
    },
    {
        id: 'comp11', category: 'KidWind Competition', difficulty: 3, type: 'flashcard',
        question: 'What should a good KidWind presentation include?',
        answer: 'Problem statement, research, design rationale, testing data, iterations/improvements, and what you learned',
        explanation: 'Strong presentations show judges your engineering process. Explain WHY you made design choices (not just what you built), show data from testing, describe how you improved after each test, and reflect on lessons learned.'
    },
    {
        id: 'comp12', category: 'KidWind Competition', difficulty: 3, type: 'multiple-choice',
        question: 'Your turbine generates good power but vibrates badly. What is the most likely cause?',
        choices: ['The wind is too strong', 'The blades are unbalanced or asymmetric', 'The tower is too tall', 'The generator is broken'],
        answer: 'The blades are unbalanced or asymmetric', explanation: 'Vibration usually means the rotor is unbalanced — blades are different weights, shapes, or angles. This creates uneven forces as the rotor spins. Careful blade matching and balancing reduces vibration and improves performance.'
    },
];

