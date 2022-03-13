
 let cargo =  `
1 - Government w ork - prisoner transfer, data courier, diplomatic run and the like (1) 

2 - Passengers (1) 

3 - Long Term passengers: a musical group or senator hires the ship for an extended period (1)
 

4 - Unprocessed ore 

5 - Processed minerals 

6 - Silica 

7 - Fabricated plastics 

8 - Chemical solutions or compounds 

9 - Industrial quality gems 
10 - Jewelry quality gems (2) 
11 - Precious metals (2) 
12 - Tibanna Gas

 
13 - Low grade rough cut lumber (3) 
14 - High grade rough cut lumber (3) 
15 - Construction grade timber (3) 
16 - Furniture grade timber (3) 
17 - Exotic timber such as Greel wood (3)

 
18 - Crude oil 
19 - Refined oil
 
20 - Machine or droid lubricants
 
21 - starship fuel


 
22 - Nuclear waste / deactivated materials
 
23 - Industrial grade isotopes
 
24 - Medical isotopes
 
25 - Reactor grade isotopes
 
26 - Weapons grade isotopes


 
27 - Unprocessed textiles
 
28 - clothing products
 
29 - Residential appliances and furniture
 
30 - Vehicle accessories
 
31 - Survival gear and protective clothing
 
32 - Colonization supplies and machinery
 
33 - Weapons, armor or ordinance (4)
 
34 - Unique weap ons - a prototype weapons or antique weapons


 
35 - Feed grade vegetation
 
36 - Food grade vegetation
 
37 - Pre-packaged food or drink
 
38 - Mass produced junk food or drink (5)
 
39 - Survival rations or MREs


 
40 - Seed
 
41 - Livestock
 
42 - Farm machinery and equipment
 
43 - Farm parts and accessories


 
44 - Beasts of burden
 
45 - Riding animals
 
46 - Common or exotic pets
 
47 - Guard animals


 
48 - General medical equipment and supplies (6)
 
49 - Specialized medical equipment and supplies (6)
 
50 - Cybernetic lubricants or components
 
51 - Cybernetic prosthetics
 
52 - Over the counter drugs and antibiotics
 
53 - Prescription medication
 
54 - Bacta

 
55 - Video games or entertainment systems
 
56 - Personal computers and data pads
 
57 - Microprocessor assemblies
 
58 - Circuitry bundles
 
59 - Advanced computers
 
60 - Weapon components (6)
 
61 - Droids or droid parts and accessories


 
62 - Sensor packages
 
63 - Atmospheric filters
 
64 - Navigation equipment
 
65 - Power plant components
 
66 - starship plating
 
67 - Engine components
 
68 - weapon cores and components (6)
 
69 - Repulsor components


 
70 - Entertainment holodiscs (7)
 
71 - Artifacts (8)
 
72 - Rare literature (9)
 
73 - Fine art (9)
 
74 - Jewelry (2)
 
75 - Rare textiles
 
76 - Exotic liquor
 
77 - Rare food additives

ILEGAL LUXURIES
 
78 - Anti-Imperial propaganda
 
79 - Slaves
 
80 - Black listed recordings
 
81 - Xenopornography
 
82 - Endangered or extinct animal products
 
83 - Bootleg items: pirated holos and music, knock-off designer clothes, unlicensed datapads


 
84 - Spice
 
85 - Designer narcotics
 
86 - Natural narcotics
 
87 - Chemical depressants
 
88 - Hallucinogens
 
89 - Chemical gas weapons
 
90 - Growth hormone
 
91 - Pheromone extracts
 
92 - Herbal stimulants
 
93 - Chemical solvents
 
94 - Protein steroids
 
95 - Genetic mutagens
 
96 - Organic toxins
 
97 - Unlicensed tools and parts
 
98 - Unlicensed combat implants or prosthetics
 
99 - Black market medicine

 100 - A preserved corpse, organs and body parts or a person frozen in carbonite`

cargo = cargo.split(/\d{1,2} \-/)
let cargoList= []
let counter = 0
cargo.forEach(ind => {

  let obj = {
    index: counter,
    text: ind
  }

  console.log(ind)

  cargoList.push(obj)
  counter += 1
})
cargoList.shift()
console.log(cargoList)

module.exports =  cargoList