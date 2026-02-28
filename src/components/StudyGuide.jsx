export default function StudyGuide() {
    return (
        <div className="animate-in">
            <div className="page-header">
                <h2>📖 Study Guide</h2>
                <p>Key concepts and diagrams to help you learn</p>
            </div>

            {/* Airfoil & Angle of Attack */}
            <div className="guide-section">
                <h3>✈️ Airfoil & Angle of Attack</h3>
                <div className="guide-content">
                    <div className="guide-image-container">
                        <img src="/images/airfoil.png" alt="Airfoil diagram showing lift, drag, and angle of attack" className="guide-image" />
                    </div>
                    <div className="guide-text">
                        <div className="guide-card">
                            <h4>What is an Airfoil?</h4>
                            <p>An airfoil is a cross-sectional shape designed to produce <strong>lift</strong> when air flows over it. Wind turbine blades use airfoil shapes, just like airplane wings!</p>
                        </div>
                        <div className="guide-card">
                            <h4>Key Forces</h4>
                            <ul>
                                <li><strong style={{ color: 'var(--color-info)' }}>Lift</strong> — pushes the blade upward (perpendicular to wind). This is what makes the blade spin!</li>
                                <li><strong style={{ color: 'var(--color-danger)' }}>Drag</strong> — slows the blade down (parallel to wind). We want to minimize this.</li>
                            </ul>
                        </div>
                        <div className="guide-card">
                            <h4>Angle of Attack (AoA)</h4>
                            <p>The angle between the <em>chord line</em> (straight line through the airfoil) and the <em>wind direction</em>.</p>
                            <ul>
                                <li>Too small → not enough lift</li>
                                <li>Just right (5-15°) → maximum lift!</li>
                                <li>Too big → <strong>stall!</strong> Air separates from the blade, lift drops suddenly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Turbine Parts */}
            <div className="guide-section">
                <h3>🌀 How Wind Turbines Work</h3>
                <div className="guide-content">
                    <div className="guide-image-container">
                        <img src="/images/turbine-parts.png" alt="Wind turbine parts diagram" className="guide-image" />
                    </div>
                    <div className="guide-text">
                        <div className="guide-card">
                            <h4>Energy Conversion Chain</h4>
                            <p><strong>Wind (kinetic energy)</strong> → Blades spin → Gearbox speeds it up → Generator converts to <strong>electricity</strong></p>
                        </div>
                        <div className="guide-card">
                            <h4>Key Parts</h4>
                            <ul>
                                <li><strong>Rotor/Blades</strong> — capture wind energy (most have 3 blades)</li>
                                <li><strong>Nacelle</strong> — housing on top that contains the gearbox and generator</li>
                                <li><strong>Gearbox</strong> — increases rotational speed (blades spin slowly, generator needs fast speed)</li>
                                <li><strong>Generator</strong> — converts rotational energy to electricity</li>
                                <li><strong>Tower</strong> — supports everything, taller = more wind</li>
                            </ul>
                        </div>
                        <div className="guide-card">
                            <h4>HAWT vs VAWT</h4>
                            <ul>
                                <li><strong>HAWT</strong> (Horizontal Axis) — blades face the wind, most common, more efficient</li>
                                <li><strong>VAWT</strong> (Vertical Axis) — blades spin around a vertical pole, works in any wind direction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gear Ratios */}
            <div className="guide-section">
                <h3>⚙️ Gear Ratios</h3>
                <div className="guide-content">
                    <div className="guide-image-container">
                        <img src="/images/gear-ratio.png" alt="Gear ratio diagram" className="guide-image" />
                    </div>
                    <div className="guide-text">
                        <div className="guide-card">
                            <h4>What is a Gear Ratio?</h4>
                            <p>Gear ratio = <strong>Driven teeth ÷ Driver teeth</strong></p>
                            <p>In wind turbines, the gearbox increases rotational speed from the slow blades to the fast generator.</p>
                        </div>
                        <div className="guide-card">
                            <h4>Example</h4>
                            <p>If the big gear (from blades) has <strong>40 teeth</strong> and the small gear (to generator) has <strong>10 teeth</strong>:</p>
                            <p style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: 'var(--color-primary)' }}>Gear Ratio = 40 ÷ 10 = 4:1</p>
                            <p>The small gear spins <strong>4× faster</strong> than the big gear!</p>
                        </div>
                        <div className="guide-card">
                            <h4>Trade-off</h4>
                            <p>Higher gear ratio = more speed but less torque. Lower ratio = less speed but more torque.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Electrical Fundamentals */}
            <div className="guide-section">
                <h3>⚡ Electrical Fundamentals</h3>
                <div className="guide-text" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-4)' }}>
                    <div className="guide-card formula-card">
                        <h4>Voltage (V)</h4>
                        <p>The "push" that moves electrons. Like water pressure in a pipe.</p>
                        <p className="formula">Measured in <strong>Volts</strong></p>
                    </div>
                    <div className="guide-card formula-card">
                        <h4>Current (I)</h4>
                        <p>The flow of electrons. Like the amount of water flowing.</p>
                        <p className="formula">Measured in <strong>Amps</strong></p>
                    </div>
                    <div className="guide-card formula-card">
                        <h4>Power (P)</h4>
                        <p className="formula" style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>P = V × I</p>
                        <p>Power (Watts) = Voltage × Current</p>
                    </div>
                    <div className="guide-card formula-card">
                        <h4>Energy (E)</h4>
                        <p className="formula" style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>E = P × t</p>
                        <p>Energy (Joules) = Power × Time</p>
                        <p>1 Watt = 1 Joule per second</p>
                    </div>
                    <div className="guide-card formula-card">
                        <h4>AC vs DC</h4>
                        <p><strong>AC</strong> — current switches direction (wall outlets)</p>
                        <p><strong>DC</strong> — current flows one way (batteries)</p>
                        <p>A <strong>rectifier</strong> converts AC → DC</p>
                    </div>
                    <div className="guide-card formula-card">
                        <h4>Betz Limit</h4>
                        <p>A turbine can capture at most <strong style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-warning)' }}>59.3%</strong> of the wind's energy.</p>
                        <p>This is the theoretical maximum — real turbines get 35-45%.</p>
                    </div>
                </div>
            </div>

            {/* Reynolds Number */}
            <div className="guide-section">
                <h3>🌊 Reynolds Number</h3>
                <div className="guide-text">
                    <div className="guide-card" style={{ maxWidth: 600 }}>
                        <h4>Formula</h4>
                        <p className="formula" style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-primary)' }}>Re = (ρ × v × L) / μ</p>
                        <ul>
                            <li><strong>ρ (rho)</strong> — air density (~1.225 kg/m³)</li>
                            <li><strong>v</strong> — velocity of the air (m/s)</li>
                            <li><strong>L</strong> — chord length of the blade (m)</li>
                            <li><strong>μ (mu)</strong> — air viscosity (~1.81 × 10⁻⁵ Pa·s)</li>
                        </ul>
                    </div>
                    <div className="guide-card" style={{ maxWidth: 600 }}>
                        <h4>What does it mean?</h4>
                        <ul>
                            <li><strong>Low Re</strong> (under 100,000) — smooth, laminar flow. Small turbines operate here.</li>
                            <li><strong>High Re</strong> (over 500,000) — turbulent flow. Large turbines operate here.</li>
                        </ul>
                        <p>KidWind turbines typically operate at <strong>low Reynolds numbers</strong>, which means the airfoil design matters a lot!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
