import { CardDraft, CardType as CT } from "../../types";
import { BrokkosCategory as BC, BrokkosEdge, BrokkosTag as BT } from "./brokkosTypes";

export const BrokkosCards: CardDraft[] = [
{
  name: `Brokkos, Apex of Forever`,
  mc: '2BGU',
  types: [CT.Creature],
  category: BC.Threat,
  tags: [
    BT.Mutates,
  ],
},
{
  name: `Basilisk Collar`,
  mc: '1',
  types: [CT.Artifact, CT.Equipment],
  category: BC.Buff,
  tags: [
    BT.GivesDeathtouch,
    BT.GivesLifelink,
  ],
},
{
  name: `Forgotten Ancient`,
  mc: '3G',
  types: [CT.Creature],
  category: BC.Buff,
  tags: [
    BT.GivesPlusCounters,
  ],
},
{
  name: `Master Biomancer`,
  mc: '2GU',
  types: [CT.Creature],
  category: BC.Buff,
  tags: [
    BT.WantsPower,
    BT.GivesPlusCounters,
  ],
},
{
  name: `Thundering Mightmare`,
  mc: '4G',
  types: [CT.Creature],
  category: BC.Buff,
  tags: [
    BT.GivesPlusCounters,
  ],
},
{
  name: `Cold-Eyed Selkie`,
  mc: '1GG',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Cradle Clearcutter`,
  mc: '3',
  types: [CT.Creature, CT.Artifact],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Crypt Rats`,
  mc: '2B',
  types: [CT.Creature],
  category: BC.Interaction,
  tags: [
    BT.WantsDeathtouch,
    BT.WantsLifelink,
    BT.WantsToughness,
    BT.WantsRegeneration,
  ],
},
{
  name: `Diviner Spirit`,
  mc: '4U',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Doom Weaver`,
  mc: '4BB',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
    BT.WantsBigBoy,
    BT.WantsSacrificeOutlet,
  ],
},
{
  name: `Doomskar Warrior`,
  mc: '2GG',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Emergent Woodwurm`,
  mc: '6G',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Kami of Whispered Hopes`,
  mc: '2G',
  types: [CT.Creature],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Marwyn, the Nurturer`,
  mc: '2G',
  types: [CT.Creature],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Rampant Rejuvenator`,
  mc: '3G',
  types: [CT.Creature],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
    BT.WantsSacrificeOutlet,
  ],
},
{
  name: `Tanuki Transplanter`,
  mc: '3G',
  types: [CT.Creature, CT.Artifact, CT.Equipment],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Thought Sponge`,
  mc: '3U',
  types: [CT.Creature],
  category: BC.Draw,
  tags: [
    BT.WantsPower,
    BT.WantsSacrificeOutlet,
  ],
},
{
  name: `Thrashing Wumpus`,
  mc: '3BB',
  types: [CT.Creature],
  category: BC.Interaction,
  tags: [
    BT.WantsToughness,
    BT.WantsLifelink,
    BT.WantsDeathtouch,
    BT.WantsRegeneration,
  ],
},
{
  name: `Viridian Joiner`,
  mc: '2G',
  types: [CT.Creature],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Arixmethes, Slumbering Isle`,
  mc: '2UG',
  types: [CT.Creature],
  category: BC.Ramp,
  tags: [
    BT.IsBigBoy,
  ],
},
{
  name: `Shigeki, Jukai Visionary`,
  mc: '1G',
  types: [CT.Creature, CT.Enchantment, CT.Legendary],
  category: BC.Ramp,
  tags: [],
},
{
  name: `Traverse the Outlands`,
  mc: '4G',
  types: [CT.Sorcery],
  category: BC.Ramp,
  tags: [
    BT.WantsPower,
  ],
},
{
  name: `Dollhouse of Horrors`,
  mc: '5',
  types: [CT.Artifact],
  category: BC.Recursion,
  tags: [],
},
{
  name: `God-Pharaoh's Gift`,
  mc: '7',
  types: [CT.Artifact],
  category: BC.Recursion,
  tags: [],
},
{
  name: `The Mimeoplasm`,
  mc: '2UGB',
  types: [CT.Creature, CT.Legendary],
  category: BC.Recursion,
  tags: [],
},
{
  name: `The Scarab God`,
  mc: '3UB',
  types: [CT.Creature, CT.Legendary],
  category: BC.Recursion,
  tags: [],
},
{
  name: `Blessing of Leeches`,
  mc: '2B',
  types: [CT.Enchantment],
  category: BC.Buff,
  tags: [
    BT.GivesRegeneration,
  ],
},
{
  name: `Cauldron of Souls`,
  mc: '5',
  types: [CT.Artifact],
  category: BC.Recursion,
  tags: [
    BT.GivesMinusCounters,
  ],
},
{
  name: `Soul Channeling`,
  mc: '2B',
  types: [CT.Enchantment],
  category: BC.Buff,
  tags: [
    BT.GivesRegeneration
  ],
},
{
  name: `Bane of Progress`,
  mc: '4GG',
  types: [CT.Creature],
  category: BC.Interaction,
  tags: [
    BT.IsBigBoy,
  ],
},
{
  name: `Greater Good`,
  mc: '2GG',
  types: [CT.Enchantment],
  category: BC.Draw,
  tags: [
    BT.WantsBigBoy,
    BT.IsSacrificeOutlet,
  ],
},
{
  name: `Mask of Griselbrand`,
  mc: '1BB',
  types: [CT.Artifact, CT.Equipment],
  category: BC.Draw,
  tags: [
    BT.GivesLifelink,
    BT.WantsBigBoy,
    BT.WantsSacrificeOutlet,
  ],
},
{
  name: `Prime Speaker Zegana`,
  mc: '2GGUU',
  types: [CT.Creature, CT.Legendary],
  category: BC.Draw,
  tags: [
    BT.WantsBigBoy,
  ],
},
{
  name: `Return of the Wildspeaker`,
  mc: '4G',
  types: [CT.Instant],
  category: BC.Draw,
  tags: [
    BT.WantsBigBoy,
  ],
},
{
  name: `Rishkar's Expertise`,
  mc: '4GG',
  types: [CT.Sorcery],
  category: BC.Draw,
  tags: [
    BT.WantsBigBoy,
  ],
},
{
  name: `Shadowheart, Dark Justiciar`,
  mc: '3B',
  types: [CT.Creature, CT.Legendary],
  category: BC.Draw,
  tags: [
    BT.WantsBigBoy,
  ],
},
{
  name: `Kalonian Hydra`,
  mc: '3GG',
  types: [CT.Creature],
  category: BC.Buff,
  tags: [
    BT.IsBigBoy,
  ],
  combos: [{
    relationship: BrokkosEdge.CombosWith,
    isMatch: other => other.tags.has(
      BT.HasPlusCounters,
      BT.GivesPlusCounters,
    ),
  }],
},
{
  name: `Polukranos, Unchained`,
  mc: '2BG',
  types: [CT.Creature, CT.Legendary],
  category: BC.Interaction,
  tags: [
    BT.IsBigBoy,
    BT.HasPlusCounters,
  ],
},
{
  name: `Mindleecher`,
  mc: '',
  types: [],
  category: BC.Other,
  tags: [],
},
{
  name: `Sawtusk Demolisher`,
  mc: '',
  types: [],
  category: BC.Other,
  tags: [],
},
];
