import { motion, AnimatePresence } from "framer-motion";

const ResponsibilitiesPopup = ({ data, open, close }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="responsibilities-popup-overlay"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={close}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <motion.div
            className="responsibilities-popup-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fc 100%)',
              borderRadius: '24px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(247, 80, 35, 0.1)'
            }}
          >
            {/* Close Button */}
            <motion.button
              onClick={close}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: 'linear-gradient(135deg, #f75023 0%, #ff7b54 100%)',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                boxShadow: '0 4px 15px rgba(247, 80, 35, 0.4)'
              }}
            >
              ✕
            </motion.button>

            {/* Scrollable Content */}
            <div style={{
              overflowY: 'auto',
              maxHeight: '90vh',
              padding: '0'
            }}>
        {data && (
                <>
                  {/* Header Section */}
                  <div style={{
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                    padding: '50px 40px 40px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Decorative Elements */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-10%',
                      width: '400px',
                      height: '400px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(247, 80, 35, 0.15) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '-30%',
                      left: '-5%',
                      width: '300px',
                      height: '300px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(128, 103, 240, 0.1) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }} />

                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '30px',
                      position: 'relative',
                      zIndex: 1,
                      flexWrap: 'wrap'
                    }}>
                      {/* Company Logo */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '20px',
                          background: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '15px',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                          flexShrink: 0
                        }}
                      >
                        <img 
                          src={data.img} 
                          alt={data.title}
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                />
                      </motion.div>

                      {/* Company Info */}
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          style={{
                            color: '#fff',
                            fontSize: '32px',
                            fontWeight: '700',
                            marginBottom: '8px',
                            fontFamily: '"Jost", sans-serif'
                          }}
                        >
                          {data.title}
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          style={{
                            color: '#f75023',
                            fontSize: '20px',
                            fontWeight: '600',
                            marginBottom: '12px',
                            fontFamily: '"Jost", sans-serif'
                          }}
                        >
                          {data.designation}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          style={{
                            display: 'flex',
                            gap: '20px',
                            flexWrap: 'wrap'
                          }}
                        >
                          {data.location && (
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}>
                              <span style={{ fontSize: '18px' }}>📍</span> {data.location}
                            </span>
                          )}
                          {data.period && (
                            <span style={{
                              color: 'rgba(255, 255, 255, 0.8)',
                              fontSize: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}>
                              <span style={{ fontSize: '18px' }}>📅</span> {data.period}
                </span>
                          )}
                        </motion.div>
              </div>
            </div>
          </div>

                  {/* Key Highlights Section */}
                  {data.highlights && data.highlights.length > 0 && (
                    <div style={{
                      padding: '35px 40px',
                      background: 'linear-gradient(135deg, #fff5f2 0%, #fef9f7 100%)',
                      borderBottom: '1px solid rgba(247, 80, 35, 0.1)'
                    }}>
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        style={{
                          fontSize: '18px',
                          fontWeight: '700',
                          color: '#1a1a2e',
                          marginBottom: '20px',
                          fontFamily: '"Jost", sans-serif',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        <span style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #f75023 0%, #ff7b54 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '16px'
                        }}>🏆</span>
                        Key Achievements
                      </motion.h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '12px'
                      }}>
                        {data.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                              background: '#fff',
                              padding: '16px 20px',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                              border: '1px solid rgba(247, 80, 35, 0.1)',
                              transition: 'all 0.3s ease'
                            }}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: '0 5px 20px rgba(247, 80, 35, 0.15)'
                            }}
                          >
                            <span style={{
                              color: '#f75023',
                              fontSize: '18px',
                              fontWeight: 'bold',
                              flexShrink: 0,
                              marginTop: '2px'
                            }}>✓</span>
                            <span style={{
                              fontSize: '14px',
                              color: '#4a4a5a',
                              lineHeight: '1.5'
                            }}>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Detailed Responsibilities */}
                  <div style={{
                    padding: '35px 40px 50px'
                  }}>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1a1a2e',
                        marginBottom: '25px',
                        fontFamily: '"Jost", sans-serif',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <span style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: 'linear-gradient(135deg, #8067f0 0%, #a78bfa 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '16px'
                      }}>📋</span>
                      Detailed Responsibilities
                    </motion.h3>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '20px'
                    }}>
                      {data.dec && data.dec.map((desc, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + (i * 0.1) }}
                          style={{
                            position: 'relative',
                            paddingLeft: '30px'
                          }}
                        >
                          {/* Timeline dot */}
                          <div style={{
                            position: 'absolute',
                            left: '0',
                            top: '8px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: i === 0 
                              ? 'linear-gradient(135deg, #f75023 0%, #ff7b54 100%)'
                              : 'linear-gradient(135deg, #8067f0 0%, #a78bfa 100%)',
                            boxShadow: i === 0 
                              ? '0 0 0 4px rgba(247, 80, 35, 0.2)'
                              : '0 0 0 4px rgba(128, 103, 240, 0.2)'
                          }} />
                          
                          {/* Timeline line */}
                          {i < data.dec.length - 1 && (
                            <div style={{
                              position: 'absolute',
                              left: '5px',
                              top: '24px',
                              width: '2px',
                              height: 'calc(100% + 8px)',
                              background: 'linear-gradient(180deg, rgba(128, 103, 240, 0.3) 0%, rgba(128, 103, 240, 0.1) 100%)'
                            }} />
                          )}
                          
                          <p style={{
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: '#4a4a5a',
                            margin: 0,
                            textAlign: 'justify'
                          }}>
                            {desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with tech tags */}
                  <div style={{
                    padding: '25px 40px',
                    background: 'linear-gradient(135deg, #f8f9fc 0%, #eef1f8 100%)',
                    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    flexWrap: 'wrap'
                  }}>
                    {data.title === "CNA Insurance" && (
                      <>
                        {['React.js', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'Kubernetes', 'CI/CD'].map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + (i * 0.05) }}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: '600',
                              background: i % 2 === 0 
                                ? 'linear-gradient(135deg, rgba(247, 80, 35, 0.1) 0%, rgba(255, 123, 84, 0.1) 100%)'
                                : 'linear-gradient(135deg, rgba(128, 103, 240, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
                              color: i % 2 === 0 ? '#f75023' : '#8067f0',
                              border: `1px solid ${i % 2 === 0 ? 'rgba(247, 80, 35, 0.2)' : 'rgba(128, 103, 240, 0.2)'}`
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </>
                    )}
                    {data.title === "Citigroup" && (
                      <>
                        {['Angular', 'TypeScript', 'RxJS', 'SCSS', 'REST API', 'Cloud CMS', 'A/B Testing'].map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + (i * 0.05) }}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: '600',
                              background: i % 2 === 0 
                                ? 'linear-gradient(135deg, rgba(247, 80, 35, 0.1) 0%, rgba(255, 123, 84, 0.1) 100%)'
                                : 'linear-gradient(135deg, rgba(128, 103, 240, 0.1) 0%, rgba(167, 139, 250, 0.1) 100%)',
                              color: i % 2 === 0 ? '#f75023' : '#8067f0',
                              border: `1px solid ${i % 2 === 0 ? 'rgba(247, 80, 35, 0.2)' : 'rgba(128, 103, 240, 0.2)'}`
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </>
        )}
      </div>
                </>
              )}
    </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsibilitiesPopup;
