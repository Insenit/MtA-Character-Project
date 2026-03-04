const WandslingerFeatures = {
  3: [
    {
      name: "Tools of the Trade",
      description: `
      <p>You gain proficiency with woodcarver's tools. If you are already proficient with woodcarver's tools, you instead gain proficiency with another set of artisan's tools of your choice.</p>
      `
    },
    {
      name: "Wandslinger Spells",
      description: `
      <p> You learn certain spells at the Artificer levels noted in the table below. These do not count against your total number of Spells Known and cannot be switched upon gaining a level.</p>
      <table style="width:100%; text-align:center; border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border:1px solid #444;">Artificer Level</th>
            <th style="border:1px solid #444;">Spells</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #444;">3rd</td>
            <td style="border:1px solid #444;">Shield, Thunderwave</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">5th</td>
            <td style="border:1px solid #444;">Blur, Scorching Ray</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">9th</td>
            <td style="border:1px solid #444;">Counterspell, Lightning Bolt</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">13th</td>
            <td style="border:1px solid #444;">Vitriolic Sphere, Wall of Fire</td>
          </tr>
          <tr>
            <td style="border:1px solid #444;">17th</td>
            <td style="border:1px solid #444;">Cone of Cold, Wall of Force</td>
          </tr>
        </tbody>
      </table>
      `
    },
    {
        name: "Arcane Sidearm",
        description: `
        <p>Your research has resulted in the creation of a Wandslinger's signature Arcane Sidearm, which uses the following rules:</p>
        <p><strong>Crafting your Sidearm.</strong> During a long rest, you can spend 1 hour crafting an Arcane Sidearm using woodcarver's tools. You can only have one Arcane Sidearm, and crafting another causes previous Arcane Sidearms to lose their power.</p>
        <p><strong>Appearance.</strong> An Arcane Sidearm is a Tiny object that can be used as a spellcasting focus for Artificer spells. You choose its appearance, though this has no effect on its abilities. Many Wandslingers craft Sidearms that resemble delicate wands of wood, ornate metallic rods, or even runic iron cannons.</p>
        <p><strong>Infusions.</strong> Your Arcane Sidearm can bear a single Infusion that is meant for an arcane focus.</p>
        `
    },
    {
        name: "Spell Slinger",
        description: `
        <p>As an action, you can use the Arcane Sidearm to produce one of the effects below using your Artificer spellcasting ability:</p>
        <p><strong>Arcane Lance.</strong> You make a ranged spell attack against one target that you can see within 120 feet. On hit, it takes force damage equal to 1d10 + your Intelligence modifier.</p>
        <p><strong>Shocking Burst.</strong> You conjure a burst of lightning at a point you can see within 60 feet, forcing creatures within 5 feet to make a Dexterity saving throw. Creatures take 2d6 lightning damage on a failed save, and half as much on a success.</p>
        <p><strong>Thunderous Blast.</strong> You emit a blast of thunderous force in an adjacent 15-foot cone, forcing creatures within to make a Strength saving throw. On a failure, they are knocked back 10 feet in a straight line and take 2d6 thunder damage.</p>
        `
    }
  ],
  5: [
    {
      name: "Arcane Duelist",
      description: `
      <p>You wield your Arcane Sidearm with deadly skill. Whenever you use a Spell Slinger action, you can produce two effects from your Arcane Sidearm instead of one. These effects can target multiple targets or the same target.</p>
      <p>The number of Spell Slinger effects you can produce from your Arcane Sidearm with a single action increases again at certain Artificer levels: at 10th level (3) and 15th level (4).</p>
      <p>Also, when you use your action to cast an Artificer spell, you can produce one Spell Slinger effect as a bonus action.</p>
      `
    }
  ],
  10: [
    {
      name: "Quickdraw",
      description: `
      <p>You add your proficiency bonus to initiative rolls, and when you roll initiative and aren't surprised or incapacitated, you can use your reaction to use one Spell Slinger effect.</p>
      `
    }
  ],
  15: [
    {
      name: "Master Wandslinger",
      description: `
      <p>Your skill with your Arcane Sidearm marks you as a master amongst Wandslingers. You gain the benefits listed below:</p>
      <ul>
        <li>When you or another creature you can see within 30 feet is targeted by a spell or magical effect, you can grant it three-quarters cover against the effect as a reaction.</li>
        <li>You have advantage on counterspell ability checks.</li>
        <li>When you deal damage with a Spell Slinger effect or Artificer spell, you can cause it to deal force damage</li>
      </ul>
      `
    }
  ]
};

export default WandslingerFeatures;