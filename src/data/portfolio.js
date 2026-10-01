export const portfolio = {
 name: 'Ayub Gardi',
 github: 'https://github.com/Ayubgardi1', email: 'ayubwshyar6@gmail.com', linkedin: 'https://www.linkedin.com/in/ayub-wshyar-03407a344/', phone: '+9647515338531', cv: '/ayub-whsyar-ahmed-cv.pdf',
 ccnaBadge: 'https://www.credly.com/badges/5695c8cc-0845-4d23-bf40-7ebe9d674d3c/public_url',
 ccnaIssued: '',
 efsetCertificate: 'https://cert.efset.org/en/VUo5iB',
 languages: [{name:'Kurdish',level:'Native'},{name:'English',level:'Upper Intermediate'},{name:'Arabic',level:'Good'}],
 introduction: 'I configure Ubuntu-based self-hosted services and remote access, design segmented Cisco networks, and practice network analysis in Linux labs. CCNA certified, with a focus on network engineering and system administration.',
 skills: [
 { title:'Networking', icon:'network', note:'Routing, switching, and segmentation.', items:['Cisco IOS','Routing & switching','VLANs','TCP/IP','Network troubleshooting'] },
 { title:'Linux & systems', icon:'terminal', note:'Administration and service management.', items:['Linux administration','Ubuntu Server','Bash & SSH','systemd','File permissions'] },
 { title:'Infrastructure', icon:'server', note:'Self-hosted services and remote access.', items:['Tailscale','Samba','CasaOS','Self-hosting','Virtualization'] },
 { title:'Security', icon:'shield', note:'Traffic analysis and security fundamentals.', items:['Nmap','Wireshark','Penetration-testing fundamentals','Network security'] },
 { title:'Automation', icon:'code', note:'Scripts, version control, and repeatable tasks.', items:['Python','Git','Basic scripting'] }
 ],
 projects: [
 { id:'home-server', number:'01', title:'Ubuntu Home Server / NAS', shortTitle:'Home Server / NAS', category:'SELF-HOSTED INFRASTRUCTURE', icon:'server', description:'An Ubuntu-based home server bringing self-hosted services, shared storage, and remote access into one place.', tags:['Ubuntu Server','CasaOS','Tailscale','Samba','Self-hosting','Remote access'], github:'', detail:'Built around Ubuntu Server and CasaOS, this setup hosts multiple services and provides Samba file sharing. Tailscale enables remote access from outside the home network.', points:['Ubuntu Server as the operating-system foundation','CasaOS for managing self-hosted services','Samba for shared files and storage','Tailscale VPN for remote connectivity'], architecture:['Internet','Tailscale','Ubuntu Server','CasaOS','Services / Storage'] },
 { id:'college-network', number:'02', title:'College Engineering Campus Network', shortTitle:'College Engineering Campus Network', category:'NETWORK ENGINEERING', icon:'network', description:'A Cisco Packet Tracer campus topology with VLAN segmentation, inter-VLAN routing, and EtherChannel across multiple routers and switches.', featured:true, tags:['Cisco IOS','VLANs','Inter-VLAN routing','EtherChannel','Routing','Network segmentation','Packet Tracer'], github:'https://github.com/Ayubgardi1/college-of-engineering-campus-network', detail:'A college network design exploring segmentation and communication across multiple routers and switches. VLANs organize the network, inter-VLAN routing connects segments, and EtherChannel groups links.', points:['VLAN-based network segmentation','Inter-VLAN routing between network segments','EtherChannel link aggregation','Multiple routers and switches in Packet Tracer'] },
 { id:'security-labs', number:'03', title:'Linux & Network Security Labs', shortTitle:'Cybersecurity Labs', category:'SECURITY EXPLORATION', icon:'shield', description:'Hands-on Linux and networking labs to explore security tools and penetration-testing fundamentals.', tags:['Linux','Nmap','Wireshark','Network analysis','Security testing'], github:'', detail:'A collection of learning labs focused on Linux, networking, and security tools. These exercises build practical understanding of penetration-testing fundamentals and network security.', points:['Linux-based practice environments','Network analysis and troubleshooting','Exploration of security tools','Penetration-testing fundamentals in lab environments'] }
 ]
};
